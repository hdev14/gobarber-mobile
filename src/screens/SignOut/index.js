import React from 'react';

import logo from '../../assets/logo.png';

import {
  Background,
  Container,
  Form,
  Image,
  FormInput,
  SubmitButton,
  Link,
  LinkText,
  LinkTextBold,
} from '../../styles/utils';

export default function SignOut({navigation}) {
  return (
    <Background>
      <Container>
        <Image source={logo} />

        <Form>
          <FormInput
            icon="person-outline"
            placeholder="Digite seu nome completo"
            autoCorrect={false}
          />

          <FormInput
            icon="mail-outline"
            placeholder="Digite seu e-mail"
            autoCorrect={false}
            autoCapitalize="none"
            keyboardType="email-address"
          />

          <FormInput
            icon="lock-outline"
            placeholder="Digite sua senha"
            secureText
          />

          <SubmitButton onPress={() => {}}>Registrar-se</SubmitButton>
        </Form>

        <Link onPress={() => navigation.navigate('signin')}>
          <LinkText>
            Já possui conta?
            <LinkTextBold> Entrar.</LinkTextBold>
          </LinkText>
        </Link>
      </Container>
    </Background>
  );
}
