import React from 'react';
import {Text} from 'react-native';

import Input from '../../components/Input';
import Button from '../../components/Button';

import {Background} from '../../styles/utils.js';

export default function SignIn() {
  return (
    <Background>
      <Text>Signin</Text>
      <Input icon="mail" placeholder="digite algo" />
      <Button>Acessar</Button>
    </Background>
  );
}
