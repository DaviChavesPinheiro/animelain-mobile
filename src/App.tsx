import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import { StatusBar, View } from 'react-native';
import changeNavigationBarColor from 'react-native-navigation-bar-color';
import { NavigationContainer } from '@react-navigation/native';
import SplashScreen from 'react-native-splash-screen';
import Routes from './shared/routes';
import AppProvider from './shared/hooks';

const App: React.FC = () => {
  useEffect(() => {
    changeNavigationBarColor('#1e1e1e', false, false);
    SplashScreen.hide();
  }, []);

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
