import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import { color } from 'react-native-reanimated';
import { ApolloProvider } from '@apollo/client';
import AppProvider from './shared/hooks';

import Routes from './shared/routes';
import client from './shared/services/client';

const App: React.FC = () => {
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
