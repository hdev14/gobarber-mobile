import createSagaMiddleware from 'redux-saga';
import {persistStore} from 'redux-persist';

import createStore from './create-store';
import createPersist from './create-persist';

import rootReducers from './modules/root-reducers';
import rootSagas from './modules/root-sagas';

const sagaMonitor = __DEV__ ? console.tron.createSagaMonitor() : null;

const sagaMiddleware = createSagaMiddleware({sagaMonitor});
const middlewares = [sagaMiddleware];

const store = createStore(createPersist(rootReducers), middlewares);
const persistor = persistStore(store);

sagaMiddleware.run(rootSagas);

export {store, persistor};
