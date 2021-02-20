import { gql, useQuery } from '@apollo/client';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import {
  ListCharacter,
  ListCharacter_character,
} from '../../../../types/graphql-types';
import Description from '../../components/Description';
import Main from '../../components/Main';

import { BackButton, Container, Header, HeaderIcon } from './styles';

export const LIST_CHARACTER = gql`
  query ListCharacter($id: String!) {
    character(id: $id) {
      id
      name
      age
      description
      isFavorited
      isFollowed
      coverImageUrl
      bannerImageUrl
    }
  }
`;

const Character: React.FC = () => {
  const route = useRoute<
    RouteProp<{ params: { character: ListCharacter_character } }, 'params'>
  >();
  const { data, loading } = useQuery<ListCharacter>(LIST_CHARACTER, {
    variables: {
      id: route.params.character.id,
    },
  });
  const navigation = useNavigation();

  if (loading || !data || !data.character) return null;
  return (
    <Container>
      <Header>
        <BackButton onPress={() => navigation.goBack()}>
          <HeaderIcon name="arrow-left" />
        </BackButton>
      </Header>

      <ScrollView>
        <Main character={data.character} />

        <Description character={data.character} />
      </ScrollView>
    </Container>
  );
};

export default Character;
