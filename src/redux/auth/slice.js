import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

import {
  signUpThunk,
  loginThunk,
  logoutThunk,
  refreshCurrentUserThunk,
} from './operations';
import { notifications } from 'services/notifications';

const authInitialState = {
  token: null,
  user: {
    email: null,
    name: null,
  },
  authenticated: false,
  isLoading: false,
  error: null,
};

const handlePending = state => {
  state.isLoading = true;
  state.error = null;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
  if (state.error === 400) {
    toast.error('The email or password are incorrect', notifications);
  }
};

const authSlice = createSlice({
  name: 'auth',
  initialState: authInitialState,
  extraReducers: builder =>
    builder
      .addCase(signUpThunk.fulfilled, (state, action) => {
        state.token = action.payload.token;
        state.user = action.payload.user;
        state.authenticated = true;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(loginThunk.fulfilled, (state, action) => {
        state.token = action.payload.token;
        state.user = action.payload.user;
        state.authenticated = true;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(logoutThunk.fulfilled, () => {
        return authInitialState;
      })
      .addCase(refreshCurrentUserThunk.fulfilled, (state, action) => {
        state.user = action.payload;
        state.authenticated = true;
        state.isLoading = false;
      })
      .addMatcher(
        isAnyOf(
          signUpThunk.pending,
          loginThunk.pending,
          logoutThunk.pending,
          refreshCurrentUserThunk.pending
        ),
        handlePending
      )
      .addMatcher(
        isAnyOf(
          signUpThunk.rejected,
          loginThunk.rejected,
          logoutThunk.rejected,
          refreshCurrentUserThunk.rejected
        ),
        handleRejected
      ),
});

export const authReducer = authSlice.reducer;
