import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import Description from '../../components/Description';
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
  const { anime } = route.params;

  return (
    <Container>
      <Header>
        <BackButton onPress={() => navigation.goBack()}>
          <HeaderIcon name="arrow-left" />
        </BackButton>
      </Header>
      <ScrollView style={{ backgroundColor: 'white' }}>
        <Main anime={anime} />
        <Description description={anime.title} />
      </ScrollView>
    </Container>
  );
};

export default Anime;
