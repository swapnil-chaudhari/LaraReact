import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import * as reducers from './reducers';
import { routerReducer } from 'react-router-redux';
import { createLogger } from 'redux-logger';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
// import storageSession from 'redux-persist/lib/storage/session'

const initialState = {};

const persistConfig = {
    key: 'root',
    storage: storage,
    whitelist: ['auth']
}

const persistedReducer = persistReducer(persistConfig, combineReducers({
    ...reducers,
    routing: routerReducer
}));

export default () => {
  let store = createStore(
        persistedReducer,
        applyMiddleware(
            thunk,
            createLogger({ predicate: () => process.env.NODE_ENV === 'development' })
        )
    )
  let persistor = persistStore(store)
  return { store, persistor }
}
