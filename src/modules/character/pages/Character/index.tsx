import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import api from '../../../../shared/services/api';
import Description from '../../components/Description';
import Main from '../../components/Main';
import { BackButton, Container, Header, HeaderIcon } from './styles';

export interface Character {
  id: string;
  name: string;
  age: number;
  description?: string;
  profile_url?: string;
  banner_url?: string;
}

const Character: React.FC = () => {
  const [character, setCharacter] = useState<Character>({} as Character);
  const navigation = useNavigation();

  const route = useRoute<
    RouteProp<{ params: { character: Character } }, 'params'>
  >();

  useEffect(() => {
    setCharacter(route.params.character);

    const { id } = route.params.character;
    api.get(`/characters/${id}`).then(response => {
      setCharacter(response.data);
    });
  }, [route.params.character]);

  return (
    <Container>
      <Header>
        <BackButton onPress={() => navigation.goBack()}>
          <HeaderIcon name="arrow-left" />
        </BackButton>
      </Header>
      <ScrollView>
        <Main character={character} />
        <Description character={character} />
      </ScrollView>
    </Container>
  );
};

export default Character;
