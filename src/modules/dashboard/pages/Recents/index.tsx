import { gql, useQuery } from '@apollo/client';
import { useNavigation } from '@react-navigation/native';
import React, { useCallback } from 'react';
import { FlatList, useWindowDimensions } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import ShimmerPlaceHolder from 'react-native-shimmer-placeholder';
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
  query UserMedias($id: String!) {
    user(id: $id) {
      userMedias(
        input: {
          userMediaStatus: CURRENT
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

const Recents: React.FC = () => {
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

  return (
    <Container>
      <Header>
        <HeaderTitle>Recentes</HeaderTitle>
        <HeaderButton onPress={() => navigation.navigate('Search')}>
          <HeaderIcon name="search" />
        </HeaderButton>
      </Header>
      <ListContainer>
        {loading ? (
          <FlatList
            key={windowWidth}
            numColumns={Math.floor(windowWidth / 120)}
            data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
            keyExtractor={id => id.toString()}
            columnWrapperStyle={{ justifyContent: 'center' }}
            renderItem={({ item: id }) => <MediaTileShimmer key={id} />}
          />
        ) : (
          <List
            key={windowWidth}
            numColumns={Math.floor(windowWidth / 120)}
            data={data.user.userMedias.edges}
            keyExtractor={userMedia => userMedia.id}
            columnWrapperStyle={{ justifyContent: 'center' }}
            renderItem={({ item: userMedia }) => (
              <MediaTile
                key={userMedia.node.id}
                title={userMedia.node.title}
                imageUri={userMedia.node.coverImageUrl}
                description={userMedia.node.authors}
                onPress={() => handleMediaCardPress(userMedia.node)}
              />
            )}
          />
        )}
      </ListContainer>
    </Container>
  );
};

export default Recents;
