import { configureStore } from '@reduxjs/toolkit';

import authSlice from '../features/auth.container/model/auth.slice';

export const store = configureStore({
  reducer: {
    user: authSlice,
  },
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
