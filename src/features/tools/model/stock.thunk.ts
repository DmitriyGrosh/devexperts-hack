import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { UserStock } from '../../../shared/ui/row/Row';

interface IResponse {
  data: Array<UserStock>;
}

export const setStockThunk = createAsyncThunk('stocks/setStockThunk', async () => {
  const response = await axios.get<IResponse>(`${process.env.REACT_APP_SERVER}tickers`, { params: { q: '' } });

  return response.data;
});
