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

interface Props {
  title: string;
  subtitle: string;
  profile_url?: string;
  banner_url?: string;
}

const Main: React.FC<Props> = ({
  title,
  subtitle,
  profile_url,
  banner_url,
}) => {
  return (
    <Container>
      <BannerImage source={{ uri: banner_url }} />
      <ProfileImage source={{ uri: profile_url }} />
      <Title>{title}</Title>
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
