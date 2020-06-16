import {Alert} from 'react-native';
import {all, call, put, takeLatest} from 'redux-saga/effects';

import api from '../../../services/api';

import {UserTypes} from '../actions-types';
import {updateProfileSuccess, updateProfileFailure} from './actions';

export function* updateProfile({payload}) {
  try {
    const {name, email, ...rest} = payload.data;
    const data = {
      name,
      email,
      ...(rest.oldPassword ? rest : {}),
    };
    const response = yield call(api.put, '/users', data);

    Alert.alert('Perfil atualizado', 'Perfil atualizado com sucesso!');
    yield put(updateProfileSuccess(response.data));
  } catch (e) {
    Alert.alert('Falha ao atualizar o perfil', 'Por favor verifique os dados');
    yield put(updateProfileFailure());
  }
}

export default all([
  takeLatest(UserTypes.UPDATE_PROFILE_REQUEST, updateProfile),
]);
