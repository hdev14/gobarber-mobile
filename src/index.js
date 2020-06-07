import 'react-native-gesture-handler';
import React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';

import './configs/reactotron-config';

import {store, persistor} from './store';

import Routes from './routes';

export default function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <StatusBar barStyle="dark-content" backgroundColor="#f2ead3" />
          <Routes />
        </PersistGate>
      </Provider>
    </NavigationContainer>
  );
}
