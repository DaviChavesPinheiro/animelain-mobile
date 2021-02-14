import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Recomend from '../pages/Home/Recomend';
import All from '../pages/Home/All';
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
    <Tab.Screen name="ALL" component={All} />
    <Tab.Screen name="SEASON" component={Season} />
    {/* <Tab.Screen name="RECOMENDADO" component={Recomend} /> */}
  </Tab.Navigator>
);

export default TabRoutes;
