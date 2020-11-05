import produce from 'immer';

import {AuthTypes} from '../actions-types';

const STATE = {
  token: null,
  signed: false,
  loading: false,
};

export default function auth(state = STATE, action) {
  return produce(state, (draftState) => {
    switch (action.type) {
      case AuthTypes.SIGN_IN_REQUEST: {
        draftState.loading = true;
        break;
      }

      case AuthTypes.SIGN_IN_SUCCESS: {
        draftState.token = action.payload.token;
        draftState.signed = true;
        draftState.loading = false;
        break;
      }

      case AuthTypes.SIGN_FAILURE: {
        draftState.loading = false;
        break;
      }

      case AuthTypes.SIGN_OUT: {
        draftState.token = null;
        draftState.signed = false;
        break;
      }

      default:
    }
  });
}
