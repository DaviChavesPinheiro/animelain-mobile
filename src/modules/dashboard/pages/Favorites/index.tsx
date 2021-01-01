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

export interface Anime {
  id: string;
  title: string;
  profile_url?: string;
}

interface User {
  id: string;
  favorite_animes: Anime[];
}

const Favorites: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);

  const navigation = useNavigation();

  useEffect(() => {
    api.get('/profile').then(response => {
      setUser(response.data);
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
          data={user?.favorite_animes}
          keyExtractor={anime => anime.id}
          renderItem={({ item: anime }) => (
            <AnimeCard onPress={() => handleAnimeCardPress(anime)}>
              <AnimeImage source={{ uri: anime.profile_url }} />
              <AnimeMetaContainer>
                <AnimeTitle>{anime.title}</AnimeTitle>
              </AnimeMetaContainer>
            </AnimeCard>
          )}
        />
      </ListContainer>
    </Container>
  );
};

export default Favorites;
