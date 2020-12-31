import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import React from 'react';
import { Text } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Main from '../../components/Main';
import { BackButton, Container, Header, HeaderIcon } from './styles';

export interface Anime {
  id: string;
  title: string;
  profile_url?: string;
  banner_url?: string;
}

const Anime: React.FC = () => {
  const navigation = useNavigation();

  const route = useRoute<RouteProp<{ params: { anime: Anime } }, 'params'>>();
  const { title, profile_url, banner_url } = route.params.anime;

  return (
    <Container>
      <Header>
        <BackButton onPress={() => navigation.goBack()}>
          <HeaderIcon name="arrow-left" />
        </BackButton>
      </Header>
      <ScrollView style={{ backgroundColor: 'white' }}>
        <Main anime={route.params.anime} />
      </ScrollView>
    </Container>
  );
};

export default Anime;
