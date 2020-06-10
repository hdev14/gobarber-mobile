import React from 'react';

import Appointment from '../../components/Appointment';

import {Background} from '../../styles/utils';
import {DashboardShape, Title, AppointmentList} from './styles';

const data = [1, 2, 3, 4, 5, 6, 7];

export default function Dashboard() {
  return (
    <Background>
      <DashboardShape>
        <Title>agendamentos</Title>

        <AppointmentList
          data={data}
          keyExtractor={(item) => String(item)}
          renderItem={({item}) => <Appointment data={item} />}
        />
      </DashboardShape>
    </Background>
  );
}
