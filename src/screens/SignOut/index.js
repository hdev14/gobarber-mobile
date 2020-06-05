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

export default function SignOut({navigation}) {
  const emailRef = useRef();
  const passwordRef = useRef();

  function handleSubmit() {}

  return (
    <Background>
      <Container>
        <Image source={logo} />

        <Form>
          <FormInput
            icon="person-outline"
            placeholder="Digite seu nome completo"
            autoCorrect={false}
            returnKeyType="next"
            onSubmitEditing={() => emailRef.current.focus()}
          />

          <FormInput
            icon="mail-outline"
            placeholder="Digite seu e-mail"
            autoCorrect={false}
            autoCapitalize="none"
            keyboardType="email-address"
            ref={emailRef}
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

          <SubmitButton onPress={handleSubmit}>Registrar-se</SubmitButton>
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
