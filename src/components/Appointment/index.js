import React, {useMemo} from 'react';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {parseISO, formatRelative} from 'date-fns';
import pt from 'date-fns/locale/pt';

import {AppointmentShape, Left, Avatar, Info, Title, Time} from './styles';

export default function Appointment({data}) {
  const dateRelative = useMemo(() => {
    return formatRelative(parseISO(data.date), new Date(), {locale: pt});
  }, [data.date]);

  return (
    <AppointmentShape>
      <Left>
        <Avatar
          source={{
            uri: data.provider.avatar
              ? data.provider.avatar.url
              : 'https://api.adorable.io/avatar/50/gobarber.png',
          }}
        />

        <Info>
          <Title>{data.provider.name}</Title>
          <Time>{dateRelative}</Time>
        </Info>
      </Left>

      <TouchableOpacity onPress={() => {}}>
        <Icon name="event-busy" size={30} color="#ff6347" />
      </TouchableOpacity>
    </AppointmentShape>
  );
}
