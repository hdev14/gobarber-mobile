import {Alert} from 'react-native';
import {all, call, put, takeLatest} from 'redux-saga/effects';

import {AuthTypes} from '../actions-types';
import {signInSuccess, signFailure} from './actions';
import api from '../../../services/api';

export function* signIn({payload}) {
  try {
    const response = yield call(api.post, '/sessions', payload);
    const {user, token} = response.data;

    if (user.provider) {
      Alert.alert(
        'Falha ao se autenticar',
        'Usuário não pode ser um prestador de serviço',
      );
      return;
    }

    api.defaults.headers.Authorization = `Baerer ${token}`;

    yield put(signInSuccess(user, token));
  } catch (e) {
    Alert.alert('Falha ao se autenticar', 'E-mail ou senha inválidos');
    yield put(signFailure());
  }
}

export function* signUp({payload}) {
  try {
    yield call(api.post, '/users', payload);
    Alert.alert('Success', 'Cadastro realizado com sucesso!');
  } catch (e) {
    Alert.alert('Falha no registro', 'Por favor, verifique seus dados.');
  }
}

export function setToken({payload}) {
  if (!payload) return;

  const {token} = payload.auth;
  if (token) {
    api.defaults.headers.Authorization = `Baerer ${token}`;
  }
}

export default all([
  takeLatest(AuthTypes.SIGN_IN_REQUEST, signIn),
  takeLatest(AuthTypes.SIGN_UP_REQUEST, signUp),
  takeLatest('persist/REHYDRATE', setToken),
]);
