import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import api from '../../../shared/api';
import { UserStock } from '../../../shared/ui/row/Row';

interface IResponse {
  data: Array<UserStock>;
}

export const deleteUserStockThunk = createAsyncThunk('stocks/deleteUserStockThunk', async (userStocks: any[]) => {
  const filteredUserStocks = userStocks.map((stock) => {
    return {
      name: stock.symbol,
    };
  });
  console.log(filteredUserStocks);
  const response = await api.post<IResponse>(`${process.env.REACT_APP_SERVER}tickers/favorits`, filteredUserStocks);

  return response.data;
});

export const addUserStockThunk = createAsyncThunk('stocks/addUserStockThunk', async (userStocks: any[]) => {
  const filteredUserStocks = userStocks.map((stock) => {
    return {
      name: stock.symbol,
    };
  });
  const response = await api.post<IResponse>(`${process.env.REACT_APP_SERVER}tickers/favorits`, filteredUserStocks);

  return response.data;
});

export const setUserStockThunk = createAsyncThunk('stocks/setUserStockThunk', async () => {
  const tikers: string = 'AAPL,MSFT,GOOG,AMZN,TSLA,NVDA,FB,TSM,UNH,JNJ,V,WMT,BAC,PG,HD,MA,XOM,CVX,PFE,BABA';
  const response = await api.get<IResponse>(`${process.env.REACT_APP_SERVER}yahoo-finance/tickers`, {
    params: { q: '' },
  });

  return response.data;
});
