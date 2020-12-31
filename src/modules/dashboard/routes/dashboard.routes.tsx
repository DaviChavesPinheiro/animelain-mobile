import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from '../pages/Home';
import Favorites from '../pages/Favorites';
import Profile from '../pages/Profile';

const Dashboard = createBottomTabNavigator();

const DashboardRoutes: React.FC = () => (
  <Dashboard.Navigator>
    <Dashboard.Screen name="Início" component={Home} />
    <Dashboard.Screen name="Favoritos" component={Favorites} />
    <Dashboard.Screen name="Perfil" component={Profile} />
  </Dashboard.Navigator>
);

export default DashboardRoutes;
