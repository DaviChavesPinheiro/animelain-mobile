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
  FeatherIcons,
  ProfileImage,
  IoniconsIcons,
  Title,
} from './styles';

interface Props {
  anime: Anime;
  setAnime(anime: Anime): void;
}

const Main: React.FC<Props> = ({ anime, setAnime }) => {
  const handleToogleFavorite = useCallback(async () => {
    if (anime.isFavorited) {
      await api.delete(`/favorites/animes/${anime.id}`);
    } else {
      await api.post(`/favorites/animes/${anime.id}`);
    }

    setAnime({
      ...anime,
      isFavorited: !anime.isFavorited,
    });
  }, [anime, setAnime]);

  return (
    <Container>
      <BannerImage source={{ uri: anime.banner_url }} />
      <ProfileImage source={{ uri: anime.profile_url }} />
      <Title>{anime.title}</Title>
      <Author>Por Naoki Urasawa</Author>
      <ButtonsContainer>
        <Button>
          <FeatherIcons name="play" />
          <ButtonLabel>Assistir</ButtonLabel>
        </Button>
        <Button>
          <FeatherIcons name="list" />
          <ButtonLabel>{`${anime.episodesAmount} Episódios`}</ButtonLabel>
        </Button>
        <Button onPress={handleToogleFavorite}>
          <IoniconsIcons
            name={anime.isFavorited ? 'heart' : 'heart-outline'}
            color={anime.isFavorited ? '#f50303' : '#03a9f5'}
          />
          <ButtonLabel>Favoritar</ButtonLabel>
        </Button>
      </ButtonsContainer>
    </Container>
  );
};

export default Main;
