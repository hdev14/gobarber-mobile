import React, {useState, useEffect} from 'react';

import api from '../../../services/api';

import DateInput from '../../../components/DateInput';

import {Background} from '../../../styles/utils';
import {Container, Availabilities, Hours, HoursText} from './styles';

export default function SelectDateTime({route}) {
  const [date, setDate] = useState(new Date());
  const [availabilities, setAvailabilities] = useState([]);
  const {provider} = route.params;

  useEffect(() => {
    async function fetchAvailabilities() {
      const response = await api.get(`/providers/${provider.id}/available`, {
        params: {
          date: date.getTime(),
        },
      });

      setAvailabilities(response.data);
    }
    fetchAvailabilities();
  }, [date, provider.id]);

  return (
    <Background>
      <Container>
        <DateInput date={date} onChange={setDate} />

        <Availabilities
          data={availabilities}
          keyExtractor={(item) => item.time}
          renderItem={({item: a}) => (
            <Hours onPress={() => {}} enabled={a.available}>
              <HoursText>{a.time}</HoursText>
            </Hours>
          )}
        />
      </Container>
    </Background>
  );
}
