import React, { useCallback } from 'react';
import api from '../../../../shared/services/api';
import { Anime } from '../../pages/Anime';
import {
  Author,
  BannerImage,
  Button,
  ButtonLabel,
  ButtonsContainer,
  Container,
  Icon,
  ProfileImage,
  Title,
} from './styles';

interface Props {
  anime: Anime;
}

const Main: React.FC<Props> = ({ anime }) => {
  const handleToogleFavorite = useCallback(() => {
    api.post(`/favorites/animes/add/${anime.id}`);
  }, [anime.id]);

  return (
    <Container>
      <BannerImage source={{ uri: anime.banner_url }} />
      <ProfileImage source={{ uri: anime.profile_url }} />
      <Title>{anime.title}</Title>
      <Author>Por Naoki Urasawa</Author>
      <ButtonsContainer>
        <Button>
          <Icon name="play" />
          <ButtonLabel>Assistir</ButtonLabel>
        </Button>
        <Button>
          <Icon name="list" />
          <ButtonLabel>{`${anime.episodesAmount} Episódios`}</ButtonLabel>
        </Button>
        <Button onPress={handleToogleFavorite}>
          <Icon name="heart" />
          <ButtonLabel>Favoritar</ButtonLabel>
        </Button>
      </ButtonsContainer>
    </Container>
  );
};

export default Main;
