import React from 'react';
import {TouchableOpacity} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/MaterialIcons';

import SelectProvider from './SelectProvider';
import SelectDateTime from './SelectDateTime';
import ConfirmAppointment from './ConfirmAppointment';

const Stack = createStackNavigator();

const LeftIcon = (color, handleOnPress) => (
  <TouchableOpacity onPress={handleOnPress}>
    <Icon name="chevron-left" size={35} color={color} />
  </TouchableOpacity>
);

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
        component={SelectProvider}
        options={{
          title: 'Selecione o prestador',
          headerLeft: ({color}) =>
            LeftIcon(color, () => navigation.navigate('dashboard')),
        }}
      />
      <Stack.Screen
        name="select-datetime"
        component={SelectDateTime}
        options={{
          title: 'Selecione o horário',
          headerLeft: ({color}) =>
            LeftIcon(color, () => navigation.navigate('select-provider')),
        }}
      />
      <Stack.Screen
        name="confirm-appointment"
        component={ConfirmAppointment}
        options={{
          title: 'Confirmar agendamento',
          headerLeft: ({color}) =>
            LeftIcon(color, () => navigation.navigate('select-date-time')),
        }}
      />
    </Stack.Navigator>
  );
}
