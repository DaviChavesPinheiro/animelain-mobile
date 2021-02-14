import React, { useCallback } from 'react';

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

const Main: React.FC<Props> = ({ media }) => {
  const handleToogleFavorite = useCallback(async () => {
    // if (media.isFavorited) {
    //   await api.delete(`/favorites/medias/${media.id}`);
    // } else {
    //   await api.post(`/favorites/medias/${media.id}`);
    // }
  }, []);

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
            name={false ? 'heart' : 'heart-outline'}
            color={false ? '#f50303' : '#03a9f5'}
          />

          <ButtonLabel>{false ? 'Favoritado' : 'Favoritar'}</ButtonLabel>
        </Button>
      </ButtonsContainer>
    </Container>
  );
};

export default Main;
