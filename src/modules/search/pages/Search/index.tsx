/* eslint-disable no-unused-expressions */

import { gql, useLazyQuery } from '@apollo/client';
import { useNavigation } from '@react-navigation/native';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { FlatList, TextInput, useWindowDimensions } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import ShimmerPlaceHolder from 'react-native-shimmer-placeholder';
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
            numColumns={Math.floor(windowWidth / 120)}
            data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
            keyExtractor={id => id.toString()}
            columnWrapperStyle={{ justifyContent: 'center' }}
            renderItem={({ item: id }) => <MediaTileShimmer key={id} />}
          />
        ) : (
          <List
            key={windowWidth}
            numColumns={Math.floor(windowWidth / 120)}
            data={data?.page.medias}
            keyExtractor={media => media.id}
            columnWrapperStyle={{ justifyContent: 'center' }}
            renderItem={({ item: media }) => (
              <MediaTile
                key={media.id}
                title={media.title}
                imageUri={media.coverImageUrl}
                description={media.authors}
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
