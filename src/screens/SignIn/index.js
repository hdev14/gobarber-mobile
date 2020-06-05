import React, {useRef} from 'react';

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

export default function SignIn({navigation}) {
  const passwordRef = useRef();

  function handleSubmit() {}

  return (
    <Background>
      <Container>
        <Image source={logo} />

        <Form>
          <FormInput
            icon="mail-outline"
            placeholder="Digite seu e-mail"
            keyboardType="email-address"
            autoCorrect={false}
            autoCapitalize="none"
            returnKeyType="next"
            onSubmitEditing={() => passwordRef.current.focus()}
          />

          <FormInput
            icon="lock-outline"
            placeholder="Digite sua senha"
            secureText
            ref={passwordRef}
            returnKeyType="send"
            onSubmitEditing={handleSubmit}
          />

          <SubmitButton onPress={handleSubmit}>Acessar</SubmitButton>
        </Form>

        <Link onPress={() => navigation.navigate('signout')}>
          <LinkText>
            Ainda não tem conta?
            <LinkTextBold> Registre-se</LinkTextBold>
          </LinkText>
        </Link>
      </Container>
    </Background>
  );
}
