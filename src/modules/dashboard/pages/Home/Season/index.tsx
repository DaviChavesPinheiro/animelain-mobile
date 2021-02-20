import { gql, useQuery } from '@apollo/client';
import { useNavigation } from '@react-navigation/native';
import React, { useCallback, useMemo } from 'react';
import { FlatList, useWindowDimensions } from 'react-native';
import {
  QuerySeasonMedias,
  QuerySeasonMedias_page_medias,
} from '../../../../../types/graphql-types';
import MediaTile from '../../../../media/components/MediaTile';
import MediaTileShimmer from '../../../../media/components/MediaTileShimmer';
import { Container, List, ListContainer } from './styles';

const LIST_MEDIAS = gql`
  query QuerySeasonMedias {
    page(input: { page: 1, perPage: 50 }) {
      medias(input: { type: ANIME, season: SUMMER }) {
        id
        title
        authors
        coverImageUrl
      }
    }
  }
`;

const Season: React.FC = () => {
  const { data, loading } = useQuery<QuerySeasonMedias>(LIST_MEDIAS);
  const { width: windowWidth, height: windowHeight } = useWindowDimensions();

  const navigation = useNavigation();

  const handleMediaCardPress = useCallback(
    (media: QuerySeasonMedias_page_medias) => {
      navigation.navigate('Media', { media });
    },
    [navigation],
  );

  const listColumnsAmount = useMemo(() => Math.floor(windowWidth / 120), [
    windowWidth,
  ]);

  const listRowsAmount = useMemo(() => Math.floor(windowHeight / 210), [
    windowHeight,
  ]);

  const arrayOfMediaTileShimmerIds = useMemo(() => {
    const array = [];
    for (let i = 0; i < listColumnsAmount * listRowsAmount; i++) {
      array.push(i);
    }
    return array;
  }, [listColumnsAmount, listRowsAmount]);

  return (
    <Container>
      <ListContainer>
        {loading ? (
          <FlatList
            key={windowWidth}
            numColumns={listColumnsAmount}
            data={arrayOfMediaTileShimmerIds}
            keyExtractor={id => id.toString()}
            columnWrapperStyle={{ justifyContent: 'center' }}
            renderItem={({ item: id }) => <MediaTileShimmer key={id} />}
          />
        ) : (
          <List
            key={windowWidth}
            numColumns={listColumnsAmount}
            data={data?.page.medias}
            keyExtractor={media => media.id}
            columnWrapperStyle={{ justifyContent: 'center' }}
            renderItem={({ item: media }) => (
              <MediaTile
                key={media.id}
                title={media.title}
                imageUri={media.coverImageUrl || undefined}
                description={media.authors?.join(' ') || undefined}
                onPress={() => handleMediaCardPress(media)}
              />
            )}
          />
        )}
      </ListContainer>
    </Container>
  );
};

export default Season;
