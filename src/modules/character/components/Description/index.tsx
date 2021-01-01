import React from 'react';
import { Description, Container, Title } from './styles';

interface Props {
  description?: string;
}

const DescriptionPage: React.FC<Props> = ({ description }) => {
  return (
    <Container>
      <Title>Descrição</Title>
      <Description>{description || 'Sem descrição'}</Description>
    </Container>
  );
};

export default DescriptionPage;
