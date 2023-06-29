import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { myContactSlice } from './contacts/contactSlice';
import { myFilterSlice } from './contacts/filterSlice';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, myContactSlice.reducer);

export const store = configureStore({
  reducer: {
    contacts: persistedReducer,
    filter: myFilterSlice.reducer,
  },

  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    });
  },
});

export const persistor = persistStore(store);
export const { add, remove } = myContactSlice.actions;
export const { filterContact } = myFilterSlice.actions;
