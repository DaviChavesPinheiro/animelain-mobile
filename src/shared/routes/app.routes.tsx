import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Dashboard from '../../modules/dashboard/pages/Dashboard';
import Anime from '../../modules/anime/pages/Anime';
import Character from '../../modules/character/pages/Character';
import Search from '../../modules/search/pages/Search';

const App = createStackNavigator();

const AppRoutes: React.FC = () => (
  <App.Navigator
    screenOptions={{
      headerShown: false,
    }}
  >
    <App.Screen name="Dashboard" component={Dashboard} />
    <App.Screen name="Anime" component={Anime} />
    <App.Screen name="Character" component={Character} />
    <App.Screen name="Search" component={Search} />
  </App.Navigator>
);

export default AppRoutes;
