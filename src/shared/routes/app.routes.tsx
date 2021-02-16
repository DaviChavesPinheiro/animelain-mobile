import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Dashboard from '../../modules/dashboard/pages/Dashboard';
import Media from '../../modules/media/pages/Media';
import Character from '../../modules/character/pages/Character';
import Search from '../../modules/search/pages/Search';
// import EditProfile from '../../modules/editProfile/pages/EditProfile';

const App = createStackNavigator();

const AppRoutes: React.FC = () => (
  <App.Navigator
    screenOptions={{
      headerShown: false,
    }}
  >
    <App.Screen name="Dashboard" component={Dashboard} />
    <App.Screen name="Media" component={Media} />
    <App.Screen name="Character" component={Character} />
    <App.Screen name="Search" component={Search} />
    {/* <App.Screen name="EditProfile" component={EditProfile} /> */}
  </App.Navigator>
);

export default AppRoutes;
