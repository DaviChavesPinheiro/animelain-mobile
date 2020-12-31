import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Recomend from '../pages/Home/Recomend';
import News from '../pages/Home/News';
import Season from '../pages/Home/Season';

const Tab = createMaterialTopTabNavigator();

const TabRoutes: React.FC = () => (
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
    <Tab.Screen name="NOVOS" component={News} />
    <Tab.Screen name="TEMPORADA" component={Season} />
  </Tab.Navigator>
);

export default TabRoutes;
