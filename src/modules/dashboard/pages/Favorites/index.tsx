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

export interface FavoriteUserAnime {
  id: string;
  anime: Anime;
}

const Favorites: React.FC = () => {
  const windowWidth = useWindowDimensions().width;

  const [favoriteUserAnime, setFavoriteUserAnime] = useState<
    FavoriteUserAnime[]
  >([]);

  const navigation = useNavigation();

  useEffect(() => {
    api.get('/favorites/animes').then(response => {
      setFavoriteUserAnime(response.data);
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
        <HeaderTitle>Favoritos</HeaderTitle>
        <HeaderButton onPress={() => navigation.navigate('Search')}>
          <HeaderIcon name="search" />
        </HeaderButton>
      </Header>
      <ListContainer>
        <List
          key={windowWidth}
          numColumns={Math.floor(windowWidth / 120)}
          data={favoriteUserAnime}
          keyExtractor={favoriteAnime => favoriteAnime.id}
          columnWrapperStyle={{ justifyContent: 'center' }}
          renderItem={({ item: favoriteAnime }) => (
            <AnimeCard
              onPress={() => handleAnimeCardPress(favoriteAnime.anime)}
            >
              <AnimeImage source={{ uri: favoriteAnime.anime.profile_url }} />
              <AnimeMetaContainer>
                <AnimeTitle numberOfLines={2}>
                  {favoriteAnime.anime.title}
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

export default Favorites;
