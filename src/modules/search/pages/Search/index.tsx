/* eslint-disable no-unused-expressions */
import { useNavigation } from '@react-navigation/native';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { TextInput, useWindowDimensions } from 'react-native';
import api from '../../../../shared/services/api';
import {
  AnimeAuthor,
  AnimeCard,
  AnimeImage,
  AnimeMetaContainer,
  AnimeTitle,
  BackButton,
  Container,
  Header,
  HeaderIcon,
  List,
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
  const windowWidth = useWindowDimensions().width;

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

export default Search;
