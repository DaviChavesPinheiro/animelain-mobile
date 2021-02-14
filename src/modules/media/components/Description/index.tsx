import React from 'react';

import { Media } from '../../pages/Media';

import { Description, Container, Title } from './styles';

interface Props {
  media: Media;
}

const DescriptionPage: React.FC<Props> = ({ media }) => {
  return (
    <Container>
      <Title>Descrição</Title>

      <Description>{media.description || 'Sem descrição'}</Description>
    </Container>
  );
};

export default DescriptionPage;
