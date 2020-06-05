import 'react-native-gesture-handler';
import React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

import './configs/reactotron-config';

import Routes from './routes';

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" backgroundColor="#f2ead3" />
      <Routes />
    </NavigationContainer>
  );
}
