import { gql, useQuery } from '@apollo/client';
import { useNavigation } from '@react-navigation/native';
import React, { useCallback, useEffect, useState } from 'react';
import { useWindowDimensions } from 'react-native';
import {
  MediaAuthor,
  MediaCard,
  MediaImage,
  MediaMetaContainer,
  MediaTitle,
  Container,
  List,
  ListContainer,
} from './styles';

export interface Media {
  id: string;
  title: string;
  authors?: string;
  coverImageUrl?: string;
}

const LIST_MEDIAS = gql`
  query {
    page(input: { page: 1, perPage: 50 }) {
      medias(input: { type: ANIME, season: SUMMER }) {
        id
        title
        authors
        coverImageUrl
      }
    }
  }
`;

const Season: React.FC = () => {
  const { data, loading } = useQuery(LIST_MEDIAS);
  const windowWidth = useWindowDimensions().width;

  const navigation = useNavigation();

  const handleMediaCardPress = useCallback(
    (media: Media) => {
      navigation.navigate('Media', { media });
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

export default Season;
