import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { UserStock } from '../../../shared/ui/row/Row';
import api from '../../../shared/api';

interface IResponse {
  data: Array<UserStock>;
}

export const setStockThunk = createAsyncThunk('stocks/setStockThunk', async () => {
  const response = await api.get<IResponse>(`${process.env.REACT_APP_SERVER}tickers`, { params: { q: '' } });

  return response.data;
});
