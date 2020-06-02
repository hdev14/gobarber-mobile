import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import SignIn from './screens/SignIn';
import SignOut from './screens/SignOut';

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="signin" component={SignIn} />
      <Stack.Screen name="signout" component={SignOut} />
    </Stack.Navigator>
  );
}
