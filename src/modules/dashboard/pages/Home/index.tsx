import React from 'react';
import { useNavigation } from '@react-navigation/native';

import {
  Container,
  Header,
  HeaderButton,
  HeaderIcon,
  HeaderTitle,
} from './styles';

import TabRoutes from '../../routes/home.routes';

const Home: React.FC = () => {
  const navigation = useNavigation();

  return (
    <Container>
      <Header>
        <HeaderTitle>Media Lain</HeaderTitle>
        <HeaderButton onPress={() => navigation.navigate('Search')}>
          <HeaderIcon name="search" />
        </HeaderButton>
      </Header>
      <TabRoutes />
    </Container>
  );
};

export default Home;
