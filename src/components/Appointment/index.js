import React from 'react';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {AppointmentShape, Left, Avatar, Info, Title, Time} from './styles';

export default function Appointment({data}) {
  return (
    <AppointmentShape>
      <Left>
        <Avatar
          source={{
            uri: 'https://api.adorable.io/avatar/50/gobarber.png',
          }}
        />

        <Info>
          <Title>João Maria</Title>
          <Time>3 horas atrás</Time>
        </Info>
      </Left>

      <TouchableOpacity onPress={() => {}}>
        <Icon name="event-busy" size={30} color="#ff6347" />
      </TouchableOpacity>
    </AppointmentShape>
  );
}
