import { useNavigation } from '@react-navigation/native';
import React, { useCallback, useEffect, useState } from 'react';
import { useWindowDimensions } from 'react-native';
import api from '../../../../../shared/services/api';
import {
  AnimeAuthor,
  AnimeCard,
  AnimeImage,
  AnimeMetaContainer,
  AnimeTitle,
  Container,
  List,
  ListContainer,
} from './styles';

export interface Anime {
  id: string;
  title: string;
  profile_url?: string;
}

const News: React.FC = () => {
  const [animes, setAnimes] = useState<Anime[]>([]);
  const windowWidth = useWindowDimensions().width;

  const navigation = useNavigation();

  useEffect(() => {
    api.get('/animes/news').then(response => {
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
        <List
          key={windowWidth}
          numColumns={Math.floor(windowWidth / 120)}
          data={animes}
          keyExtractor={anime => anime.id}
          columnWrapperStyle={{ justifyContent: 'center' }}
          renderItem={({ item: anime }) => (
            <AnimeCard onPress={() => handleAnimeCardPress(anime)}>
              <AnimeImage source={{ uri: anime.profile_url }} />
              <AnimeMetaContainer>
                <AnimeTitle numberOfLines={2}>{anime.title}</AnimeTitle>
                <AnimeAuthor numberOfLines={1}>Naoki Urasawa</AnimeAuthor>
              </AnimeMetaContainer>
            </AnimeCard>
          )}
        />
      </ListContainer>
    </Container>
  );
};

export default News;
