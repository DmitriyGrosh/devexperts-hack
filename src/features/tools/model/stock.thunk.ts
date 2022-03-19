import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

interface IResponse {
  data: Array<{ id: string }>;
}

export const setStockThunk = createAsyncThunk('stocks/setStockThunk', async () => {
  const response = await axios.get<IResponse>(`${process.env.REACT_APP_SERVER}tickers`, { params: { q: '' } });

  return response.data;
});
