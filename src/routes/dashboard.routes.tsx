import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../pages/Home';
import Favorites from '../pages/Favorites';

const Dashboard = createBottomTabNavigator();

const DashboardRoutes: React.FC = () => (
  <Dashboard.Navigator>
    <Dashboard.Screen name="Início" component={Home} />
    <Dashboard.Screen name="Favoritos" component={Favorites} />
  </Dashboard.Navigator>
);

export default DashboardRoutes;
