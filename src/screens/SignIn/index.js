import React, {useRef, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {signInRequest} from '../../store/modules/auth/actions';

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
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const loading = useSelector((s) => s.auth.loading);
  const dispatch = useDispatch();

  function handleSubmit() {
    dispatch(signInRequest(email, password));
  }

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
            value={email}
            onChangeText={setEmail}
          />

          <FormInput
            icon="lock-outline"
            placeholder="Digite sua senha"
            secureTextEntry
            ref={passwordRef}
            returnKeyType="send"
            onSubmitEditing={handleSubmit}
            value={password}
            onChangeText={setPassword}
          />

          <SubmitButton loading={loading} onPress={handleSubmit}>
            Acessar
          </SubmitButton>
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
