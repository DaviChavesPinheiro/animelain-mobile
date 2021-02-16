/* eslint-disable no-unused-expressions */

import { gql, useLazyQuery } from '@apollo/client';
import { useNavigation } from '@react-navigation/native';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { TextInput, useWindowDimensions } from 'react-native';

import {
  MediaAuthor,
  MediaCard,
  MediaImage,
  MediaMetaContainer,
  MediaTitle,
  BackButton,
  Container,
  Header,
  HeaderIcon,
  List,
  ListContainer,
  SearchInput,
} from './styles';

export interface Media {
  id: string;
  title: string;
  authors?: string;
  coverImageUrl?: string;
}
const SEARCH_MEDIA = gql`
  query Search($search: String!) {
    page(input: { page: 1, perPage: 50 }) {
      medias(input: { type: ANIME, search: $search }) {
        id
        title
        authors
        coverImageUrl
      }
    }
  }
`;

const Search: React.FC = () => {
  const inputRef = useRef<TextInput>(null);
  const [searchValue, setSearchValue] = useState('');
  const [getMedias, { loading, data }] = useLazyQuery(SEARCH_MEDIA, {
    variables: {
      search: searchValue,
    },
  });

  const navigation = useNavigation();

  const windowWidth = useWindowDimensions().width;

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const search = useCallback(
    (value: string) => {
      if (value.length === 0) return;

      getMedias({
        variables: {
          search: searchValue,
        },
      });
    },
    [getMedias, searchValue],
  );

  const handleMediaCardPress = useCallback(
    (media: Media) => {
      navigation.navigate('Media', { media });
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
          // ref={inputRef}
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
          data={data?.page.medias}
          keyExtractor={media => media.id}
          columnWrapperStyle={{ justifyContent: 'center' }}
          renderItem={({ item: media }) => (
            <MediaCard onPress={() => handleMediaCardPress(media)}>
              <MediaImage source={{ uri: media.coverImageUrl }} />
              <MediaMetaContainer>
                <MediaTitle numberOfLines={2}>{media.title}</MediaTitle>
                <MediaAuthor numberOfLines={1}>
                  {media.authors || 'Desconhecido'}
                </MediaAuthor>
              </MediaMetaContainer>
            </MediaCard>
          )}
        />
      </ListContainer>
    </Container>
  );
};

export default Search;
