import React from 'react';
import { Anime } from '../../pages/Anime';
import { GenreText, Container, Title, GenreButton } from './styles';

interface Props {
  anime: Anime;
}

const Genres: React.FC<Props> = ({ anime }) => {
  return (
    <Container>
      <Title>Gêneros</Title>
      {anime.genres?.map(genre => (
        <GenreButton key={genre.id}>
          <GenreText>{genre.category.name}</GenreText>
        </GenreButton>
      ))}
    </Container>
  );
};

export default Genres;
