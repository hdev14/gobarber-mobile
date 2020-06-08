import React from 'react';
import {useSelector} from 'react-redux';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import SignIn from './screens/SignIn';
import SignOut from './screens/SignOut';
import Dashboard from './screens/Dashboard';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function Routes() {
  const signed = useSelector((s) => s.auth.signed);

  return signed ? (
    <Tab.Navigator>
      <Tab.Screen name="dashboard" component={Dashboard} />
    </Tab.Navigator>
  ) : (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="signin" component={SignIn} />
      <Stack.Screen name="signout" component={SignOut} />
    </Stack.Navigator>
  );
}
