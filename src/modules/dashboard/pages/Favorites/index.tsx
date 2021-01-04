import { useNavigation } from '@react-navigation/native';
import React, { useCallback, useEffect, useState } from 'react';
import api from '../../../../shared/services/api';
import {
  AnimeCard,
  AnimeImage,
  AnimeMetaContainer,
  AnimeTitle,
  Container,
  Header,
  HeaderIcon,
  HeaderTitle,
  HorizontalList,
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
        <HeaderIcon name="search" size={20} />
      </Header>
      <ListContainer>
        <HorizontalList
          numColumns={3}
          data={favoriteUserAnime}
          keyExtractor={favoriteAnime => favoriteAnime.id}
          renderItem={({ item: favoriteAnime }) => (
            <AnimeCard
              onPress={() => handleAnimeCardPress(favoriteAnime.anime)}
            >
              <AnimeImage source={{ uri: favoriteAnime.anime.profile_url }} />
              <AnimeMetaContainer>
                <AnimeTitle>{favoriteAnime.anime.title}</AnimeTitle>
              </AnimeMetaContainer>
            </AnimeCard>
          )}
        />
      </ListContainer>
    </Container>
  );
};

export default Favorites;
