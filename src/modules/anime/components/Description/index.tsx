import React from 'react';
import { Author, Container, Title } from './styles';

interface Props {
  description: string;
}

const Description: React.FC<Props> = ({ description }) => {
  return (
    <Container>
      <Title>Descrição</Title>
      <Author>{description || 'Sem descrição'}</Author>
    </Container>
  );
};

export default Description;
