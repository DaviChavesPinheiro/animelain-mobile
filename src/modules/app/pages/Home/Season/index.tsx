import React, { useEffect, useState } from 'react';
import api from '../../../../../shared/services/api';
import { Container, HorizontalList, ListContainer, ListTitle } from './styles';

export interface Anime {
  id: string;
  title: string;
  profile_url: string;
}

const Season: React.FC = () => {
  const [animes, setAnimes] = useState<Anime[]>([]);

  useEffect(() => {
    api.get('/animes').then(response => {
      setAnimes(response.data);
    });
  }, []);

  return (
    <Container>
      <ListContainer>
        <ListTitle>Seinen</ListTitle>
        <HorizontalList
          data={animes}
          keyExtractor={anime => anime.id}
          renderItem={({ item: anime }) => <ListTitle>{anime.title}</ListTitle>}
          horizontal
        />
      </ListContainer>
    </Container>
  );
};

export default Season;
