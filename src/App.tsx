import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import { StatusBar, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import changeNavigationBarColor from 'react-native-navigation-bar-color';
import { ApolloProvider } from '@apollo/client';
import AppProvider from './shared/hooks';

import Routes from './shared/routes';
import client from './shared/services/client';

const App: React.FC = () => {
  useEffect(() => {
    changeNavigationBarColor('#1e1e1e', false, true);
  }, []);

  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
        <StatusBar barStyle="light-content" backgroundColor="#1e1e1e" />
        <AppProvider>
          <View style={{ backgroundColor: '#000', flex: 1 }}>
            <Routes />
          </View>
        </AppProvider>
      </NavigationContainer>
    </ApolloProvider>
  );
};

export default App;
