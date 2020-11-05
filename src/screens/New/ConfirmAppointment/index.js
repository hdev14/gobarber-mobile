import React, {useMemo} from 'react';
import {CommonActions} from '@react-navigation/native';
import {formatRelative, parseISO} from 'date-fns';
import pt from 'date-fns/locale/pt';

import api from '../../../services/api';

import {Background, Container, Title} from '../../../styles/utils';
import {Appointment, Avatar, Time, SubmitButton, SBText} from './styles';

export default function ConfirmAppointment({route, navigation}) {
  const {provider, datetime} = route.params;

  const formatedDateTime = useMemo(() => {
    return formatRelative(parseISO(datetime), new Date(), {locale: pt});
  }, [datetime]);

  async function handleAddAppointment() {
    const response = await api.post('/appointments', {
      provider_id: provider.id,
      date: datetime,
    });

    if (response.status === 200) {
      navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [{name: 'dashboard'}],
        }),
      );
    }
  }

  return (
    <Background>
      <Container>
        <Appointment>
          <Avatar
            source={{
              uri: provider.avatar
                ? provider.avatar.url
                : `https://api.adorable.io/avatar/50/${provider.name}.png`,
            }}
          />
          <Title>{provider.name}</Title>
          <Time>{formatedDateTime}</Time>

          <SubmitButton onPress={handleAddAppointment}>
            <SBText>Confirmar Agendamento</SBText>
          </SubmitButton>
        </Appointment>
      </Container>
    </Background>
  );
}
