import React from 'react';
import { ListMedia_media } from '../../../../types/graphql-types';

import { Description, Container, Title } from './styles';

interface Props {
  media: ListMedia_media;
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
