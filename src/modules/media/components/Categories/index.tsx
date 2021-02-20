import React from 'react';
import { ListMedia_media } from '../../../../types/graphql-types';

import { CategoryText, Container, Title, CategoryButton } from './styles';

interface Props {
  media: ListMedia_media;
}

const Categories: React.FC<Props> = ({ media }) => {
  return (
    <Container>
      <Title>Gêneros</Title>

      {media.categories.edges.map(mediaCategory => (
        <CategoryButton key={mediaCategory.id}>
          <CategoryText>{mediaCategory.node.name}</CategoryText>
        </CategoryButton>
      ))}
    </Container>
  );
};

export default Categories;
