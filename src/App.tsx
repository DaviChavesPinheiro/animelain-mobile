import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import AppProvider from './shared/hooks';

import Routes from './shared/routes';

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" backgroundColor="#1e1e1e" />
      <AppProvider>
        <View style={{ backgroundColor: '#000', flex: 1 }}>
          <Routes />
        </View>
      </AppProvider>
    </NavigationContainer>
  );
};

export default App;
