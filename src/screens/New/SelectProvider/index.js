import React, {useEffect, useState} from 'react';

import api from '../../../services/api';

import {Background, Avatar} from '../../../styles/utils';
import {Container, ProviderList, Provider, Name} from './styles';

export default function SelectProvider({navigation}) {
  const [providers, setProviders] = useState([]);

  useEffect(() => {
    async function fetchProviders() {
      const response = await api.get('/providers');
      setProviders(response.data);
    }
    fetchProviders();
  }, []);

  return (
    <Background>
      <Container>
        <ProviderList
          data={providers}
          keyExtractor={(item) => String(item.id)}
          renderItem={({item: provider}) => (
            <Provider
              onPress={() => {
                navigation.navigate('select-datetime', {provider});
              }}>
              <Avatar
                source={{
                  uri: provider.avatar
                    ? provider.avatar.url
                    : `https://api.adorable.io/avatar/50/${provider.name}.png`,
                }}
              />

              <Name>{provider.name}</Name>
            </Provider>
          )}
        />
      </Container>
    </Background>
  );
}
