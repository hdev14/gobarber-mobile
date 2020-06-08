import React, {useRef, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {signUpRequest} from '../../store/modules/auth/actions';

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
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const loading = useSelector((s) => s.auth.loading);
  const dispatch = useDispatch();

  function handleSubmit() {
    dispatch(signUpRequest(name, email, password));
  }

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
            value={name}
            onChangeText={setName}
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
            Registrar-se
          </SubmitButton>
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
