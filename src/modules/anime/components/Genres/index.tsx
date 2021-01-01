import React from 'react';
import { GenreText, Container, Title, GenreButton } from './styles';

interface Category {
  id: string;
  name: string;
}

interface Genre {
  id: string;
  score: number;
  category: Category;
}

interface Props {
  genres?: Genre[];
}

const Genres: React.FC<Props> = ({ genres }) => {
  return (
    <Container>
      <Title>Gêneros</Title>
      {genres?.map(genre => (
        <GenreButton key={genre.id}>
          <GenreText>{genre.category.name}</GenreText>
        </GenreButton>
      ))}
    </Container>
  );
};

export default Genres;
