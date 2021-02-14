import { gql, useQuery } from '@apollo/client';
import { useNavigation } from '@react-navigation/native';
import React, { useCallback, useEffect, useState } from 'react';
import { useWindowDimensions } from 'react-native';
import {
  AnimeAuthor,
  AnimeCard,
  AnimeImage,
  AnimeMetaContainer,
  AnimeTitle,
  Container,
  List,
  ListContainer,
} from './styles';

export interface Anime {
  id: string;
  title: string;
  authors?: string;
  coverImageUrl?: string;
}

const LIST_MEDIAS = gql`
  query {
    page(input: { page: 1, perPage: 50 }) {
      medias(input: { type: ANIME }) {
        id
        title
        authors
        coverImageUrl
      }
    }
  }
`;

const All: React.FC = () => {
  const { data, loading } = useQuery(LIST_MEDIAS);
  const windowWidth = useWindowDimensions().width;

  const navigation = useNavigation();

  const handleAnimeCardPress = useCallback(
    (anime: Anime) => {
      navigation.navigate('Anime', { anime });
    },
    [navigation],
  );

  if (loading) return null;
  return (
    <Container>
      <ListContainer>
        <List
          key={windowWidth}
          numColumns={Math.floor(windowWidth / 120)}
          data={data.page.medias}
          keyExtractor={anime => anime.id}
          columnWrapperStyle={{ justifyContent: 'center' }}
          renderItem={({ item: anime }) => (
            <AnimeCard onPress={() => handleAnimeCardPress(anime)}>
              <AnimeImage source={{ uri: anime.coverImageUrl }} />
              <AnimeMetaContainer>
                <AnimeTitle numberOfLines={2}>{anime.title}</AnimeTitle>
                <AnimeAuthor numberOfLines={1}>
                  {anime.authors || 'Desconhecido'}
                </AnimeAuthor>
              </AnimeMetaContainer>
            </AnimeCard>
          )}
        />
      </ListContainer>
    </Container>
  );
};

export default All;
