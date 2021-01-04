import { useNavigation } from '@react-navigation/native';
import React, { useCallback, useEffect, useState } from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import api from '../../../../../shared/services/api';
import {
  AnimeAuthor,
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
      <ScrollView>
        <ListContainer>
          <ListTitle>Seinen</ListTitle>
          <HorizontalList
            data={animes}
            keyExtractor={anime => anime.id}
            renderItem={({ item: anime }) => (
              <AnimeCard onPress={() => handleAnimeCardPress(anime)}>
                <AnimeImage source={{ uri: anime.profile_url }} />
                <AnimeMetaContainer>
                  <AnimeTitle numberOfLines={2}>{anime.title}</AnimeTitle>
                  <AnimeAuthor numberOfLines={1}>Naoki Urasawa</AnimeAuthor>
                </AnimeMetaContainer>
              </AnimeCard>
            )}
            horizontal
          />
        </ListContainer>
        <ListContainer>
          <ListTitle>Ação</ListTitle>
          <HorizontalList
            data={animes}
            keyExtractor={anime => anime.id}
            renderItem={({ item: anime }) => (
              <AnimeCard onPress={() => handleAnimeCardPress(anime)}>
                <AnimeImage source={{ uri: anime.profile_url }} />
                <AnimeMetaContainer>
                  <AnimeTitle numberOfLines={2}>{anime.title}</AnimeTitle>
                  <AnimeAuthor numberOfLines={1}>Naoki Urasawa</AnimeAuthor>
                </AnimeMetaContainer>
              </AnimeCard>
            )}
            horizontal
          />
        </ListContainer>
        <ListContainer>
          <ListTitle>Shounen</ListTitle>
          <HorizontalList
            data={animes}
            keyExtractor={anime => anime.id}
            renderItem={({ item: anime }) => (
              <AnimeCard onPress={() => handleAnimeCardPress(anime)}>
                <AnimeImage source={{ uri: anime.profile_url }} />
                <AnimeMetaContainer>
                  <AnimeTitle numberOfLines={2}>{anime.title}</AnimeTitle>
                  <AnimeAuthor numberOfLines={1}>Naoki Urasawa</AnimeAuthor>
                </AnimeMetaContainer>
              </AnimeCard>
            )}
            horizontal
          />
        </ListContainer>
        <ListContainer>
          <ListTitle>Ecchi</ListTitle>
          <HorizontalList
            data={animes}
            keyExtractor={anime => anime.id}
            renderItem={({ item: anime }) => (
              <AnimeCard onPress={() => handleAnimeCardPress(anime)}>
                <AnimeImage source={{ uri: anime.profile_url }} />
                <AnimeMetaContainer>
                  <AnimeTitle numberOfLines={2}>{anime.title}</AnimeTitle>
                  <AnimeAuthor numberOfLines={1}>Naoki Urasawa</AnimeAuthor>
                </AnimeMetaContainer>
              </AnimeCard>
            )}
            horizontal
          />
        </ListContainer>
      </ScrollView>
    </Container>
  );
};

export default Recomend;
