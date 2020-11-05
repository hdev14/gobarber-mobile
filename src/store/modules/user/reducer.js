import produce from 'immer';

import {AuthTypes, UserTypes} from '../actions-types';

const STATE = {profile: null};

export default function user(state = STATE, action) {
  return produce(state, (draftState) => {
    switch (action.type) {
      case AuthTypes.SIGN_IN_SUCCESS: {
        draftState.profile = action.payload.user;
        break;
      }

      case UserTypes.UPDATE_PROFILE_SUCCESS: {
        draftState.profile = action.payload.profile;
        break;
      }

      case AuthTypes.SIGN_OUT: {
        draftState.profile = null;
        break;
      }

      default:
    }
  });
}
