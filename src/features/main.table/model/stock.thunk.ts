import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { UserStock } from '../../../shared/ui/row/Row';

interface IResponse {
  data: Array<UserStock>;
}

export const deleteUserStockThunk = createAsyncThunk('stocks/deleteUserStockThunk', async (userStocks: any[]) => {
  const response = await axios.post<IResponse>(`${process.env.REACT_APP_SERVER}tickers`, { params: { q: '' } });

  return response.data;
});

export const addUserStockThunk = createAsyncThunk('stocks/addUserStockThunk', async (userStocks: any[]) => {
  const response = await axios.delete<IResponse>(`${process.env.REACT_APP_SERVER}tickers`, { params: { q: '' } });

  return response.data;
});

export const setUserStockThunk = createAsyncThunk('stocks/setUserStockThunk', async () => {
  const tikers: string = 'AAPL,MSFT,GOOG,AMZN,TSLA,NVDA,FB,TSM,UNH,JNJ,V,WMT,BAC,PG,HD,MA,XOM,CVX,PFE,BABA';
  const response = await axios.get<IResponse>(`${process.env.REACT_APP_SERVER}yahoo-finance/tickers/info/${tikers}`, {
    params: { q: '' },
  });

  return response.data;
});
