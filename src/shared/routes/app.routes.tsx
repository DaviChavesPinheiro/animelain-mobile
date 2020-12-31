import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Dashboard from '../../modules/dashboard/pages/Dashboard';
import Anime from '../../modules/anime/pages/Anime';

const App = createStackNavigator();

const AppRoutes: React.FC = () => (
  <App.Navigator
    screenOptions={{
      headerShown: false,
    }}
  >
    <App.Screen name="Dashboard" component={Dashboard} />
    <App.Screen name="Anime" component={Anime} />
  </App.Navigator>
);

export default AppRoutes;
