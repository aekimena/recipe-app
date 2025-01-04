import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';
import {RootState} from './store';
import {UserProfileProps, UserStoreProps} from '../types/profile.types';

const initialState: UserStoreProps = {
  user: null,
};

const profileSlice = createSlice({
  name: 'profileSlice',
  initialState,
  reducers: {
    setUserProfile: (state, action: PayloadAction<UserProfileProps | null>) => {
      state.user = action.payload;
    },
  },
});

export const profileStore = profileSlice.reducer;
export const {setUserProfile} = profileSlice.actions;
export const selectUserProfile = (state: RootState) => state.profileStore.user;
