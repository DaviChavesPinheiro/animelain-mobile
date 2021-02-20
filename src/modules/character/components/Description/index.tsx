import React from 'react';
import { ListCharacter_character } from '../../../../types/graphql-types';

import { Description, Container, Title } from './styles';

interface Props {
  character?: ListCharacter_character;
}

const DescriptionPage: React.FC<Props> = ({ character }) => {
  return (
    <Container>
      <Title>Descrição</Title>

      <Description>{character?.description || 'Sem descrição'}</Description>
    </Container>
  );
};

export default DescriptionPage;
