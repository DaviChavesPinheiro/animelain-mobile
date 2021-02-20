import { gql, useQuery } from '@apollo/client';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import Characters from '../../components/Characters';
import Description from '../../components/Description';
import Categories from '../../components/Categories';
import Main from '../../components/Main';
import { BackButton, Container, Header, HeaderIcon } from './styles';
import { ListMedia, ListMedia_media } from '../../../../types/graphql-types';

const LIST_MEDIA = gql`
  query ListMedia($id: String!) {
    media(id: $id) {
      id
      type
      title
      authors
      description
      isFavorited
      coverImageUrl
      bannerImageUrl
      episodesAmount
      categories(input: { page: 1, perPage: 50 }) {
        edges {
          id
          score
          node {
            id
            name
          }
        }
      }
      characters(input: { page: 1, perPage: 50 }) {
        edges {
          id
          role
          node {
            id
            name
            coverImageUrl
          }
        }
      }
    }
  }
`;

const Media: React.FC = () => {
  const route = useRoute<
    RouteProp<{ params: { media: ListMedia_media } }, 'params'>
  >();
  const { data, loading } = useQuery<ListMedia>(LIST_MEDIA, {
    variables: {
      id: route.params.media.id,
    },
  });
  const navigation = useNavigation();

  if (loading || !data || !data.media) return null;
  return (
    <Container>
      <Header>
        <BackButton onPress={() => navigation.goBack()}>
          <HeaderIcon name="arrow-left" />
        </BackButton>
      </Header>
      <ScrollView>
        <Main media={data.media} />
        <Description media={data.media} />
        <Categories media={data.media} />
        <Characters media={data.media} />
      </ScrollView>
    </Container>
  );
};

export default Media;
