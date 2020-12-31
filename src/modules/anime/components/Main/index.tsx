import React from 'react';
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

interface Anime {
  id: string;
  title: string;
  profile_url?: string;
  banner_url?: string;
}

interface Props {
  anime: Anime;
}

const Main: React.FC<Props> = ({ anime }) => {
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
          <ButtonLabel>Capítulos</ButtonLabel>
        </Button>
        <Button>
          <Icon name="heart" />
          <ButtonLabel>Favoritar</ButtonLabel>
        </Button>
      </ButtonsContainer>
    </Container>
  );
};

export default Main;
