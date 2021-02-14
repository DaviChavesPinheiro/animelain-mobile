import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Feather from 'react-native-vector-icons/Feather';

import Home from '../pages/Home';
import Favorites from '../pages/Favorites';
import Recents from '../pages/Recents';
import Profile from '../pages/Profile';

const Dashboard = createBottomTabNavigator();

const DashboardRoutes: React.FC = () => (
  <Dashboard.Navigator
    tabBarOptions={{
      style: {
        backgroundColor: '#1e1e1e',
        borderTopColor: '#1e1e1e',
        height: 55,
        paddingTop: 5,
      },
      activeTintColor: '#03a9f5',
      labelStyle: {
        marginBottom: 6,
        marginTop: 4,
        fontSize: 10,
        fontFamily: 'Roboto-Medium',
      },
    }}
  >
    <Dashboard.Screen
      options={{
        tabBarIcon: ({ color }) => (
          <Feather name="compass" color={color} size={23} />
        ),
      }}
      name="INÍCIO"
      component={Home}
    />
    {/* <Dashboard.Screen
      options={{
        tabBarIcon: ({ color }) => (
          <Feather name="heart" color={color} size={23} />
        ),
      }}
      name="FAVORITOS"
      component={Favorites}
    />
    <Dashboard.Screen
      options={{
        tabBarIcon: ({ color }) => (
          <Feather name="clock" color={color} size={23} />
        ),
      }}
      name="RECENTES"
      component={Recents}
    />
    <Dashboard.Screen
      options={{
        tabBarIcon: ({ color }) => (
          <Feather name="user" color={color} size={23} />
        ),
      }}
      name="PERFIL"
      component={Profile}
    /> */}
  </Dashboard.Navigator>
);

export default DashboardRoutes;
