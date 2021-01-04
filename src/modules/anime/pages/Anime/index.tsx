import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import api from '../../../../shared/services/api';
import Characters from '../../components/Characters';
import Description from '../../components/Description';
import Genres from '../../components/Genres';
import Main from '../../components/Main';
import { BackButton, Container, Header, HeaderIcon } from './styles';

export interface Character {
  id: string;
  name: string;
  age: number;
  profile_url?: string;
  banner_url?: string;
}

export interface Animes_characters {
  id: string;
  role?: string;
  character: Character;
}

export interface Category {
  id: string;
  name: string;
}

export interface Genre {
  id: string;
  score: number;
  category: Category;
}

export interface Anime {
  id: string;
  title: string;
  episodesAmount: number;
  description?: string;
  genres?: Genre[];
  animes_characters?: Animes_characters[];
  profile_url?: string;
  banner_url?: string;
  isFavorited?: boolean;
}

const Anime: React.FC = () => {
  const [anime, setAnime] = useState<Anime>({} as Anime);
  const navigation = useNavigation();

  const route = useRoute<RouteProp<{ params: { anime: Anime } }, 'params'>>();

  useEffect(() => {
    const { id } = route.params.anime;
    setAnime(route.params.anime);

    api.get(`/animes/${id}`).then(response => {
      setAnime(response.data);
    });
  }, [route.params.anime]);

  return (
    <Container>
      <Header>
        <BackButton onPress={() => navigation.goBack()}>
          <HeaderIcon name="arrow-left" />
        </BackButton>
      </Header>
      <ScrollView>
        <Main anime={anime} setAnime={setAnime} />
        <Description anime={anime} />
        <Genres anime={anime} />
        <Characters anime={anime} />
      </ScrollView>
    </Container>
  );
};

export default Anime;
