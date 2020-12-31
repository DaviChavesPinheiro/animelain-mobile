import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Container, Header, HeaderIcon, HeaderTitle } from './styles';

import Favorites from '../Favorites';
import Recomend from './Recomend';

const Tab = createMaterialTopTabNavigator();

const Home: React.FC = () => {
  return (
    <Container>
      <Header>
        <HeaderTitle>Anime Lain</HeaderTitle>
        <HeaderIcon name="search" size={20} />
      </Header>
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: '#03a9f5',
          inactiveTintColor: '#5e5e5e',
          indicatorContainerStyle: {
            backgroundColor: '#1e1e1e',
          },
          indicatorStyle: {
            backgroundColor: '#03a9f5',
            height: 3,
          },
          labelStyle: {
            fontSize: 12,
            fontFamily: 'Roboto-Medium',
          },
        }}
      >
        <Tab.Screen name="RECOMENDADO" component={Recomend} />
        <Tab.Screen name="NOVOS" component={Favorites} />
        <Tab.Screen name="TEMPORADA" component={Favorites} />
      </Tab.Navigator>
    </Container>
  );
};

export default Home;
