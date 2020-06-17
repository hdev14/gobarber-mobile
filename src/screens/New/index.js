import React from 'react';
import {TouchableOpacity} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/MaterialIcons';

import SelectProvider from './SelectProvider';
import SelectDateTime from './SelectDateTime';
import ConfirmAppointment from './ConfirmAppointment';

const Stack = createStackNavigator();

export default function New({navigation}) {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTransparent: true,
        headerTintColor: '#321313',
        headerTitleAlign: 'center',
        headerLeftContainerStyle: {
          marginLeft: 20,
        },
      }}>
      <Stack.Screen
        name="select-provider"
        options={{
          title: 'Selecionar Prestador',
          headerLeft: ({color}) => (
            <TouchableOpacity onPress={() => navigation.navigate('dashboard')}>
              <Icon name="chevron-left" size={35} color={color} />
            </TouchableOpacity>
          ),
        }}
        component={SelectProvider}
      />
      <Stack.Screen name="select-datatime" component={SelectDateTime} />
      <Stack.Screen name="confirm-appointment" component={ConfirmAppointment} />
    </Stack.Navigator>
  );
}
