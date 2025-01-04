import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';
import {AuthStateProps} from '../types/auth.types';
import {RootState} from './store';

const initialState: AuthStateProps = {
  token: null,
  isNewUser: true,
};

export const authSlice = createSlice({
  name: 'authSlice',
  initialState,
  reducers: {
    setUserToken: (state, action: PayloadAction<string | null>) => {
      state.token = action.payload;
    },
    setIsNewUser: (state, action: PayloadAction<boolean>) => {
      state.isNewUser = action.payload;
    },
  },
});

export const {setIsNewUser, setUserToken} = authSlice.actions;
export const authStore = authSlice.reducer;
export const selectUserToken = (state: RootState) => state.authStore.token;
export const selectIsNewUser = (state: RootState) => state.authStore.isNewUser;
