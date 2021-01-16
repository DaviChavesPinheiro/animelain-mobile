/* eslint-disable no-shadow */
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
  const [seinenAnimes, setSeinenAnimes] = useState<Anime[]>([]);
  const [adventureAnimes, setAdventureAnimes] = useState<Anime[]>([]);
  const [shounenAnimes, setShounenAnimes] = useState<Anime[]>([]);
  const navigation = useNavigation();

  useEffect(() => {
    api
      .get('/animes', {
        params: {
          categories: ['947ca3be-3b25-443e-bb7e-d2ea648ae4d8'],
        },
      })
      .then(response => {
        setSeinenAnimes(response.data);
        api
          .get('/animes', {
            params: {
              categories: ['f5fc96e2-a3c2-41ab-aefc-64856687dd71'],
            },
          })
          .then(response => {
            setAdventureAnimes(response.data);
            api
              .get('/animes', {
                params: {
                  categories: ['acf1e1f7-01d5-41c0-b8c7-52db5cbba814'],
                },
              })
              .then(response => {
                setShounenAnimes(response.data);
              });
          });
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
            data={seinenAnimes}
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
          <ListTitle>Adventure</ListTitle>
          <HorizontalList
            data={adventureAnimes}
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
          <ListTitle>Comedy</ListTitle>
          <HorizontalList
            data={shounenAnimes}
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
