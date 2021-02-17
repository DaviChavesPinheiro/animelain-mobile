import { gql, useQuery } from '@apollo/client';
import { useNavigation } from '@react-navigation/native';
import React, { useCallback, useEffect, useState } from 'react';
import { useWindowDimensions } from 'react-native';
import { useAuth } from '../../../auth/hooks/auth';
import {
  MediaAuthor,
  MediaCard,
  MediaImage,
  MediaMetaContainer,
  MediaTitle,
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
  query UserMedias($id: String!) {
    user(id: $id) {
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
  const { data, loading } = useQuery(LIST_USER_MEDIAS, {
    variables: {
      id: user.id,
    },
  });
  const windowWidth = useWindowDimensions().width;

  const navigation = useNavigation();

  const handleMediaCardPress = useCallback(
    (media: Media) => {
      navigation.navigate('Media', { media });
    },
    [navigation],
  );

  if (loading) return null;
  return (
    <Container>
      <Header>
        <HeaderTitle>Favoritos</HeaderTitle>
        <HeaderButton onPress={() => navigation.navigate('Search')}>
          <HeaderIcon name="search" />
        </HeaderButton>
      </Header>
      <ListContainer>
        <List
          key={windowWidth}
          numColumns={Math.floor(windowWidth / 120)}
          data={data.user.userMedias.edges}
          keyExtractor={userMedia => userMedia.id}
          columnWrapperStyle={{ justifyContent: 'center' }}
          renderItem={({ item: userMedia }) => (
            <MediaCard onPress={() => handleMediaCardPress(userMedia.node)}>
              <MediaImage source={{ uri: userMedia.node.coverImageUrl }} />
              <MediaMetaContainer>
                <MediaTitle numberOfLines={2}>
                  {userMedia.node.title}
                </MediaTitle>
                <MediaAuthor numberOfLines={1}>
                  {userMedia.node.authors || 'Desconhecido'}
                </MediaAuthor>
              </MediaMetaContainer>
            </MediaCard>
          )}
        />
      </ListContainer>
    </Container>
  );
};

export default Favorites;
