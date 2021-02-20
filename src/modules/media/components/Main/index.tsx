import { gql, useMutation } from '@apollo/client';
import React, { useCallback } from 'react';
import { useAuth } from '../../../auth/hooks/auth';

import { Media } from '../../pages/Media';

import {
  Author,
  BannerImage,
  Button,
  ButtonLabel,
  ButtonsContainer,
  Container,
  FeatherIcons,
  ProfileImage,
  IoniconsIcons,
  Title,
} from './styles';

interface Props {
  media: Media;
}

const CREATE_USER_MEDIA = gql`
  mutation CreateUserMedia($userId: String!, $mediaId: String!) {
    createUserMedia(
      input: { userId: $userId, mediaId: $mediaId, userMediaStatus: FAVORITE }
    ) {
      id
    }
  }
`;
const DELETE_USER_MEDIA = gql`
  mutation DeleteUserMedia($userId: String!, $mediaId: String!) {
    deleteUserMedia(
      input: { userId: $userId, mediaId: $mediaId, userMediaStatus: FAVORITE }
    ) {
      id
    }
  }
`;

const LIST_MEDIA = gql`
  query ListMediaForQuery($id: String!) {
    media(id: $id) {
      id
    }
  }
`;

const Main: React.FC<Props> = ({ media }) => {
  const { user } = useAuth();

  const [createUserMedia] = useMutation(CREATE_USER_MEDIA, {
    update(cache, fetchData) {
      cache.writeQuery({
        query: LIST_MEDIA,
        variables: {
          id: media.id,
        },
        data: {
          media: {
            isFavorited: true,
          },
        },
      });

      // const userMediasFavorites = cache.readQuery({
      //   query: LIST_USER_MEDIAS_FAVORITES,
      //   variables: {
      //     id: user.id,
      //   },
      // });

      // const newUserMedia = fetchData.createUserMedia;
      // console.log(cache.identify(userMediasFavorites?.user.userMedias));
      // console.log(cache.identify(userMediasFavorites?.user));
      // console.log(cache.identify(userMediasFavorites));

      // cache.writeQuery({
      //   query: LIST_USER_MEDIAS_FAVORITES,
      //   variables: {
      //     id: user.id,
      //   },
      //   data: {
      //     user: {
      //       userMedias: {
      //         edges: [
      //           ...userMediasFavorites.user.userMedias.edges,
      //           fetchData.createUserMedia,
      //         ],
      //       },
      //     },
      //   },
      // });
    },
  });
  const [deleteUserMedia] = useMutation(DELETE_USER_MEDIA, {
    update(cache) {
      cache.writeQuery({
        query: LIST_MEDIA,
        variables: {
          id: media.id,
        },
        data: {
          media: {
            isFavorited: false,
          },
        },
      });
    },
  });

  const handleToogleFavorite = useCallback(async () => {
    if (media.isFavorited) {
      await deleteUserMedia({
        variables: {
          userId: user.id,
          mediaId: media.id,
        },
      });
    } else {
      await createUserMedia({
        variables: {
          userId: user.id,
          mediaId: media.id,
        },
      });
    }
  }, [createUserMedia, deleteUserMedia, media.id, media.isFavorited, user.id]);

  return (
    <Container>
      <BannerImage source={{ uri: media.bannerImageUrl }} />

      <ProfileImage source={{ uri: media.coverImageUrl }} />

      <Title>{media.title}</Title>

      <Author>{media.authors || 'Autor desconhecido'}</Author>

      <ButtonsContainer>
        <Button>
          <FeatherIcons name="play" />

          <ButtonLabel>Assistir</ButtonLabel>
        </Button>

        <Button>
          <FeatherIcons name="list" />

          <ButtonLabel>{`${media.episodesAmount || 0} Episódios`}</ButtonLabel>
        </Button>

        <Button onPress={handleToogleFavorite}>
          <IoniconsIcons
            name={media.isFavorited ? 'heart' : 'heart-outline'}
            color={media.isFavorited ? '#f50303' : '#03a9f5'}
          />

          <ButtonLabel>
            {media.isFavorited ? 'Favoritado' : 'Favoritar'}
          </ButtonLabel>
        </Button>
      </ButtonsContainer>
    </Container>
  );
};

export default Main;
