/* eslint-disable no-unused-expressions */

import { gql, useLazyQuery } from '@apollo/client';
import { useNavigation } from '@react-navigation/native';
import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { FlatList, TextInput, useWindowDimensions } from 'react-native';
import {
  QuerySearch,
  QuerySearch_page_medias,
} from '../../../../types/graphql-types';
import MediaTile from '../../../media/components/MediaTile';
import MediaTileShimmer from '../../../media/components/MediaTileShimmer';

import {
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
  query QuerySearch($search: String!) {
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
  const [getMedias, { loading, data }] = useLazyQuery<QuerySearch>(
    SEARCH_MEDIA,
    {
      variables: {
        search: searchValue,
      },
    },
  );

  const navigation = useNavigation();

  const { width: windowWidth, height: windowHeight } = useWindowDimensions();

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
    (media: QuerySearch_page_medias) => {
      navigation.navigate('Media', { media });
    },

    [navigation],
  );

  const listColumnsAmount = useMemo(() => Math.floor(windowWidth / 120), [
    windowWidth,
  ]);

  const listRowsAmount = useMemo(() => Math.floor(windowHeight / 210), [
    windowHeight,
  ]);

  const arrayOfMediaTileShimmerIds = useMemo(() => {
    const array = [];
    for (let i = 0; i < listColumnsAmount * listRowsAmount; i++) {
      array.push(i);
    }
    return array;
  }, [listColumnsAmount, listRowsAmount]);

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
        {loading ? (
          <FlatList
            key={windowWidth}
            numColumns={listColumnsAmount}
            data={arrayOfMediaTileShimmerIds}
            keyExtractor={id => id.toString()}
            columnWrapperStyle={{ justifyContent: 'center' }}
            renderItem={({ item: id }) => <MediaTileShimmer key={id} />}
          />
        ) : (
          <List
            key={windowWidth}
            numColumns={listColumnsAmount}
            data={data?.page.medias}
            keyExtractor={media => media.id}
            columnWrapperStyle={{ justifyContent: 'center' }}
            renderItem={({ item: media }) => (
              <MediaTile
                key={media.id}
                title={media.title}
                imageUri={media.coverImageUrl || undefined}
                description={media.authors?.join(' ') || undefined}
                onPress={() => handleMediaCardPress(media)}
              />
            )}
          />
        )}
      </ListContainer>
    </Container>
  );
};

export default Search;
