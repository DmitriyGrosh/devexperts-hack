import { configureStore } from '@reduxjs/toolkit';

import authSlice from '../features/auth.container/model/auth.slice';
import stocksSlice from '../features/tools/model/stock.slice';

export const store = configureStore({
  reducer: {
    user: authSlice,
    stocks: stocksSlice,
  },
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
