import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import Routes from './routes';

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" backgroundColor="#1e1e1e" />
      <View style={{ backgroundColor: '#000', flex: 1 }}>
        <Routes />
      </View>
    </NavigationContainer>
  );
};

export default App;
