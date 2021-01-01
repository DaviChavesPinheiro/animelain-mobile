import { useNavigation } from '@react-navigation/native';
import React, { useCallback, useEffect, useState } from 'react';
import api from '../../../../../shared/services/api';
import {
  AnimeCard,
  AnimeImage,
  AnimeMetaContainer,
  AnimeTitle,
  Container,
  HorizontalList,
  ListContainer,
  ListTitle,
} from './styles';

export interface Anime {
  id: string;
  title: string;
  profile_url?: string;
}

const Recomend: React.FC = () => {
  const [animes, setAnimes] = useState<Anime[]>([]);
  const navigation = useNavigation();

  useEffect(() => {
    api.get('/animes').then(response => {
      setAnimes(response.data);
    });
  }, []);

  const handleAnimeCardPress = useCallback(
    (anime: Anime) => {
      navigation.navigate('Anime', { anime });
    },
    [navigation],
  );

  return (
    <Container>
      <ListContainer>
        <ListTitle>Seinen</ListTitle>
        <HorizontalList
          data={animes}
          keyExtractor={anime => anime.id}
          renderItem={({ item: anime }) => (
            <AnimeCard onPress={() => handleAnimeCardPress(anime)}>
              <AnimeImage source={{ uri: anime.profile_url }} />
              <AnimeMetaContainer>
                <AnimeTitle>{anime.title}</AnimeTitle>
              </AnimeMetaContainer>
            </AnimeCard>
          )}
          horizontal
        />
      </ListContainer>
    </Container>
  );
};

export default Recomend;
