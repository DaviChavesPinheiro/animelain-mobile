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
  refetchMedia(): Promise<any>;
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

const Main: React.FC<Props> = ({ media, refetchMedia }) => {
  const { user } = useAuth();

  const [createUserMedia] = useMutation(CREATE_USER_MEDIA);
  const [deleteUserMedia] = useMutation(DELETE_USER_MEDIA);

  const handleToogleFavorite = useCallback(async () => {
    if (media.isFavorited) {
      await deleteUserMedia({
        variables: {
          userId: user.id,
          mediaId: media.id,
        },
      });
      await refetchMedia();
    } else {
      await createUserMedia({
        variables: {
          userId: user.id,
          mediaId: media.id,
        },
      });
      await refetchMedia();
    }
  }, [
    createUserMedia,
    deleteUserMedia,
    media.id,
    media.isFavorited,
    refetchMedia,
    user.id,
  ]);

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
