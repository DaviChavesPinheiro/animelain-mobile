import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { Container, Logo } from './styles';

import logoImg from '../../../../assets/logo.png';

const Favorites: React.FC = () => {
  return (
    <Container>
      <ScrollView style={{ marginBottom: 42 }}>
        <Logo source={logoImg} resizeMode="contain" />
      </ScrollView>
    </Container>
  );
};

export default Favorites;
