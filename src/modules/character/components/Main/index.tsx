import React from 'react';

import { Character } from '../../pages/Character';

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
  character: Character;
}

const Main: React.FC<Props> = ({ character }) => {
  return (
    <Container>
      <BannerImage source={{ uri: character.bannerImageUrl }} />

      <ProfileImage source={{ uri: character.coverImageUrl }} />

      <Title>{character.name}</Title>

      <Author>Por Naoki Urasawa</Author>

      <ButtonsContainer>
        <Button>
          <Icon name="play" />

          <ButtonLabel>Assistir</ButtonLabel>
        </Button>

        <Button>
          <Icon name="bell" />

          <ButtonLabel>Seguir</ButtonLabel>
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
