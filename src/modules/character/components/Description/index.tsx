import React from 'react';
import { Character } from '../../pages/Character';
import { Description, Container, Title } from './styles';

interface Props {
  character: Character;
}

const DescriptionPage: React.FC<Props> = ({ character }) => {
  return (
    <Container>
      <Title>Descrição</Title>
      <Description>{character.description || 'Sem descrição'}</Description>
    </Container>
  );
};

export default DescriptionPage;
