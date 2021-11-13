import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import contactsReducer from './contacts/contacts-reducers'
import logger from 'redux-logger'
import { 
  persistStore, 
  persistReducer, 
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER, } 
  from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const contactsPersistConfig = {
  key: 'contact',
  storage,
  blacklist: ['filter']
}

const middleware = [...getDefaultMiddleware({
  serializableCheck: {
    ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
  },
}), logger]

export const store = configureStore({
  reducer: {
    contacts: persistReducer(contactsPersistConfig, contactsReducer)
  },
  middleware,
  devTools: process.env.NODE_ENV === 'development'
})

export const persistor = persistStore(store)




// import { createStore, combineReducers } from 'redux';
// import { composeWithDevTools } from "redux-devtools-extension";

// const rootReducer = combineReducers({
//   contacts: contactsReducer
// });

// const store = createStore(rootReducer, composeWithDevTools());