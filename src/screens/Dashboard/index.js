import React, {useEffect, useState} from 'react';

import api from '../../services/api';

import Appointment from '../../components/Appointment';

import {Background, Title} from '../../styles/utils';
import {DashboardShape, AppointmentList} from './styles';

export default function Dashboard() {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    async function fetchAppointments() {
      const response = await api.get('/appointments');
      setAppointments(response.data);
    }

    fetchAppointments();
  }, []);

  async function handleCancel(id) {
    const response = await api.delete(`/appointments/${id}`);
    const newData = appointments.map((appointment) => {
      if (appointment.id === id) {
        return {
          ...appointment,
          canceled_at: response.data.canceled_at,
        };
      }

      return appointment;
    });

    setAppointments(newData);
  }

  return (
    <Background>
      <DashboardShape>
        <Title>agendamentos</Title>

        <AppointmentList
          data={appointments}
          keyExtractor={(item) => String(item.id)}
          renderItem={({item}) => (
            <Appointment handleCancel={handleCancel} data={item} />
          )}
        />
      </DashboardShape>
    </Background>
  );
}
