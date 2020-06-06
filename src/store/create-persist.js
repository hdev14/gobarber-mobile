import AsyncStorage from '@react-native-community/async-storage';
import {presistReducer} from 'redux-persist';

export default (reducers) =>
  presistReducer(
    {
      key: 'gobarber-mobile',
      storage: AsyncStorage,
      whitelist: ['auth', 'user'],
    },
    reducers,
  );
