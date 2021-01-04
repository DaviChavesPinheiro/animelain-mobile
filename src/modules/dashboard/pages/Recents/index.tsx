import { useNavigation } from '@react-navigation/native';
import React, { useCallback, useEffect, useState } from 'react';
import { useWindowDimensions } from 'react-native';
import api from '../../../../shared/services/api';
import {
  AnimeAuthor,
  AnimeCard,
  AnimeImage,
  AnimeMetaContainer,
  AnimeTitle,
  Container,
  Header,
  HeaderButton,
  HeaderIcon,
  HeaderTitle,
  List,
  ListContainer,
} from './styles';

interface Anime {
  id: string;
  title: string;
  apisodesAmount: number;
  profile_url?: string;
  banner_url?: string;
}

export interface RecentUserAnime {
  id: string;
  anime: Anime;
}

const Recents: React.FC = () => {
  const windowWidth = useWindowDimensions().width;

  const [recentUserAnimes, setRecentUserAnimes] = useState<RecentUserAnime[]>(
    [],
  );

  const navigation = useNavigation();

  useEffect(() => {
    api.get('/recents/animes').then(response => {
      setRecentUserAnimes(response.data);
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
      <Header>
        <HeaderTitle>Recentes</HeaderTitle>
        <HeaderButton onPress={() => navigation.navigate('Search')}>
          <HeaderIcon name="search" />
        </HeaderButton>
      </Header>
      <ListContainer>
        <List
          key={windowWidth}
          numColumns={Math.floor(windowWidth / 120)}
          data={recentUserAnimes}
          keyExtractor={recentAnime => recentAnime.id}
          columnWrapperStyle={{ justifyContent: 'center' }}
          renderItem={({ item: recentAnime }) => (
            <AnimeCard onPress={() => handleAnimeCardPress(recentAnime.anime)}>
              <AnimeImage source={{ uri: recentAnime.anime.profile_url }} />
              <AnimeMetaContainer>
                <AnimeTitle numberOfLines={2}>
                  {recentAnime.anime.title}
                </AnimeTitle>
                <AnimeAuthor numberOfLines={1}>Naoki Urasawa</AnimeAuthor>
              </AnimeMetaContainer>
            </AnimeCard>
          )}
        />
      </ListContainer>
    </Container>
  );
};

export default Recents;
