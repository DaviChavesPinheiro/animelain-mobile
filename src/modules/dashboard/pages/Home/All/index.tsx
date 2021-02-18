import { gql, useQuery } from '@apollo/client';
import { useNavigation } from '@react-navigation/native';
import React, { useCallback } from 'react';
import { FlatList, useWindowDimensions } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import ShimmerPlaceHolder from 'react-native-shimmer-placeholder';
import {
  MediaAuthor,
  MediaCard,
  MediaImage,
  MediaMetaContainer,
  MediaTitle,
  Container,
  List,
  ListContainer,
} from './styles';

export interface Media {
  id: string;
  title: string;
  authors?: string;
  coverImageUrl?: string;
}

const LIST_MEDIAS = gql`
  query {
    page(input: { page: 1, perPage: 50 }) {
      medias(input: { type: ANIME }) {
        id
        title
        authors
        coverImageUrl
      }
    }
  }
`;

const All: React.FC = () => {
  const { data, loading } = useQuery(LIST_MEDIAS);
  const windowWidth = useWindowDimensions().width;

  const navigation = useNavigation();

  const handleMediaCardPress = useCallback(
    (media: Media) => {
      navigation.navigate('Media', { media });
    },
    [navigation],
  );

  return (
    <Container>
      <ListContainer>
        {loading ? (
          <FlatList
            key={windowWidth}
            numColumns={Math.floor(windowWidth / 120)}
            data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
            keyExtractor={id => id.toString()}
            columnWrapperStyle={{ justifyContent: 'center' }}
            renderItem={({ item: id }) => (
              <ShimmerPlaceHolder
                key={id}
                LinearGradient={LinearGradient}
                style={{
                  borderRadius: 3,
                  width: 100,
                  height: 200,
                  marginRight: 5,
                  marginLeft: 5,
                  marginBottom: 10,
                }}
                shimmerColors={['#1e1e1e', '#2a2a2a', '#1e1e1e']}
              />
            )}
          />
        ) : (
          <List
            key={windowWidth}
            numColumns={Math.floor(windowWidth / 120)}
            data={data.page.medias}
            keyExtractor={media => media.id}
            columnWrapperStyle={{ justifyContent: 'center' }}
            renderItem={({ item: media }) => (
              <MediaCard onPress={() => handleMediaCardPress(media)}>
                <MediaImage source={{ uri: media.coverImageUrl }} />
                <MediaMetaContainer>
                  <MediaTitle numberOfLines={2}>{media.title}</MediaTitle>
                  <MediaAuthor numberOfLines={1}>
                    {media.authors || 'Desconhecido'}
                  </MediaAuthor>
                </MediaMetaContainer>
              </MediaCard>
            )}
          />
        )}
      </ListContainer>
    </Container>
  );
};

export default All;
