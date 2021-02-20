import { gql, useQuery } from '@apollo/client';
import { useNavigation } from '@react-navigation/native';
import React, { useCallback, useMemo } from 'react';
import { FlatList, useWindowDimensions } from 'react-native';
import {
  ListUserMediasFavorites,
  ListUserMediasFavorites_user_userMedias_edges_node,
} from '../../../../types/graphql-types';
import { useAuth } from '../../../auth/hooks/auth';
import MediaTile from '../../../media/components/MediaTile';
import MediaTileShimmer from '../../../media/components/MediaTileShimmer';
import {
  Container,
  Header,
  HeaderButton,
  HeaderIcon,
  HeaderTitle,
  List,
  ListContainer,
} from './styles';

interface Media {
  id: string;
  title: string;
  type: string;
  authors?: string;
  coverImageUrl?: string;
}

export interface UserMedia {
  id: string;
  node: Media;
}

const LIST_USER_MEDIAS = gql`
  query ListUserMediasFavorites($id: String!) {
    user(id: $id) {
      id
      userMedias(
        input: {
          userMediaStatus: FAVORITE
          mediaType: ANIME
          page: 1
          perPage: 50
        }
      ) {
        edges {
          id
          node {
            id
            type
            title
            authors
            coverImageUrl
          }
        }
      }
    }
  }
`;

const Favorites: React.FC = () => {
  const { user } = useAuth();
  const { data, loading } = useQuery<ListUserMediasFavorites>(
    LIST_USER_MEDIAS,
    {
      variables: {
        id: user.id,
      },
    },
  );
  const { width: windowWidth, height: windowHeight } = useWindowDimensions();

  const navigation = useNavigation();

  const handleMediaCardPress = useCallback(
    (media: ListUserMediasFavorites_user_userMedias_edges_node) => {
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
      <Header>
        <HeaderTitle>Favoritos</HeaderTitle>
        <HeaderButton onPress={() => navigation.navigate('Search')}>
          <HeaderIcon name="search" />
        </HeaderButton>
      </Header>
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
            data={data?.user.userMedias.edges || undefined}
            keyExtractor={userMedia => userMedia.id}
            columnWrapperStyle={{ justifyContent: 'center' }}
            renderItem={({ item: userMedia }) => (
              <MediaTile
                key={userMedia.node.id}
                title={userMedia.node.title}
                imageUri={userMedia.node.coverImageUrl || undefined}
                description={userMedia.node.authors?.join(' ') || undefined}
                onPress={() => handleMediaCardPress(userMedia.node)}
              />
            )}
          />
        )}
      </ListContainer>
    </Container>
  );
};

export default Favorites;
