/* eslint-disable no-unused-expressions */
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Text, TextInput } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import api from '../../../../shared/services/api';
import {
  AnimeCard,
  AnimeImage,
  AnimeMetaContainer,
  AnimeTitle,
  BackButton,
  Container,
  Header,
  HeaderIcon,
  HorizontalList,
  ListContainer,
  SearchInput,
} from './styles';

export interface Anime {
  id: string;
  title: string;
  profile_url?: string;
}

const Search: React.FC = () => {
  const inputRef = useRef<TextInput>(null);
  const [searchValue, setSearchValue] = useState('');

  const [animes, setAnimes] = useState<Anime[]>([]);

  const navigation = useNavigation();

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const search = useCallback((value: string) => {
    if (value.length === 0) return;

    api
      .get('/animes', {
        params: {
          search: value,
        },
      })
      .then(response => {
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
      <Header>
        <BackButton onPress={() => navigation.goBack()}>
          <HeaderIcon name="arrow-left" />
        </BackButton>
        <SearchInput
          ref={inputRef}
          autoCorrect={false}
          placeholder="Pesquise um anime, manga..."
          returnKeyType="search"
          onSubmitEditing={() => {
            search(searchValue);
          }}
          placeholderTextColor="#aaa"
          value={searchValue}
          onChangeText={setSearchValue}
        />
      </Header>
      <ListContainer>
        <HorizontalList
          numColumns={3}
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
        />
      </ListContainer>
    </Container>
  );
};

export default Search;
