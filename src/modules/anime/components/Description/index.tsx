import React from 'react';
import { Anime } from '../../pages/Anime';
import { Description, Container, Title } from './styles';

interface Props {
  anime: Anime;
}

const DescriptionPage: React.FC<Props> = ({ anime }) => {
  return (
    <Container>
      <Title>Descrição</Title>
      <Description>{anime.description || 'Sem descrição'}</Description>
    </Container>
  );
};

export default DescriptionPage;
