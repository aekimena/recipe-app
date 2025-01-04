import {configureStore} from '@reduxjs/toolkit';
import {authStore} from './authStore';
import {profileStore} from './profileStore';

export const store = configureStore({
  reducer: {
    authStore,
    profileStore,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
