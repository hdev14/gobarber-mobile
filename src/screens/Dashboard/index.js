import React, {useEffect, useState} from 'react';

import api from '../../services/api';

import Appointment from '../../components/Appointment';

import {Background} from '../../styles/utils';
import {DashboardShape, Title, AppointmentList} from './styles';

export default function Dashboard() {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    async function fetchAppointments() {
      const response = await api.get('/appointments');

      setAppointments(response.data);
    }

    fetchAppointments();
  }, []);

  return (
    <Background>
      <DashboardShape>
        <Title>agendamentos</Title>

        <AppointmentList
          data={appointments}
          keyExtractor={(item) => String(item.id)}
          renderItem={({item}) => <Appointment data={item} />}
        />
      </DashboardShape>
    </Background>
  );
}
