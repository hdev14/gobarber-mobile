import React from 'react';

import logo from '../../assets/logo.png';

import {Background} from '../../styles/utils.js';
import {
  SignInContainer,
  Form,
  Image,
  FormInput,
  SubmitButton,
  SignOutLink,
  SOLText,
  SOLTextBold,
} from './styles';

export default function SignIn() {
  return (
    <Background>
      <SignInContainer>
        <Image source={logo} />

        <Form>
          <FormInput
            icon="mail-outline"
            placeholder="Digite seu e-mail"
            keyboardType="email-address"
            autoCorrect={false}
            autoCapitalize="none"
          />

          <FormInput
            icon="lock-outline"
            placeholder="Digite sua senha"
            secureText
          />

          <SubmitButton onPress={() => {}}>Acessar</SubmitButton>
        </Form>

        <SignOutLink>
          <SOLText>
            Ainda não tem conta?
            <SOLTextBold> Registre-se</SOLTextBold>
          </SOLText>
        </SignOutLink>
      </SignInContainer>
    </Background>
  );
}
