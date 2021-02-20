import { gql, useMutation } from '@apollo/client';
import React, { useCallback } from 'react';
import {
  CreateUserMedia,
  DeleteUserMedia,
  ListMedia_media,
  ListUserMediasFavorites,
} from '../../../../types/graphql-types';
import { useAuth } from '../../../auth/hooks/auth';
import { LIST_USER_MEDIAS_FAVORITES } from '../../../dashboard/pages/Favorites';

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
  media: ListMedia_media;
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

  const [createUserMedia] = useMutation<CreateUserMedia>(CREATE_USER_MEDIA, {
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

      const userMediasFavorites = cache.readQuery<ListUserMediasFavorites>({
        query: LIST_USER_MEDIAS_FAVORITES,
        variables: {
          id: user.id,
        },
      });

      const newUserMedia = fetchData.data?.createUserMedia;

      cache.writeQuery({
        query: LIST_USER_MEDIAS_FAVORITES,
        variables: {
          id: user.id,
        },
        data: {
          user: {
            userMedias: {
              edges: [
                ...(userMediasFavorites?.user.userMedias.edges || []),
                newUserMedia,
              ],
            },
          },
        },
      });
    },
  });
  const [deleteUserMedia] = useMutation<DeleteUserMedia>(DELETE_USER_MEDIA, {
    update(cache, fetchData) {
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

      const userMediasFavorites = cache.readQuery<ListUserMediasFavorites>({
        query: LIST_USER_MEDIAS_FAVORITES,
        variables: {
          id: user.id,
        },
      });

      const deletedUserMedia = fetchData.data?.deleteUserMedia;

      cache.writeQuery({
        query: LIST_USER_MEDIAS_FAVORITES,
        variables: {
          id: user.id,
        },
        data: {
          user: {
            userMedias: {
              edges: [
                ...(userMediasFavorites?.user.userMedias.edges || []).filter(
                  userMedia => userMedia.id !== deletedUserMedia?.id,
                ),
              ],
            },
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
      <BannerImage source={{ uri: media.bannerImageUrl || undefined }} />

      <ProfileImage source={{ uri: media.coverImageUrl || undefined }} />

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
