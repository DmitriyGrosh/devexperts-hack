import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { setStockThunk } from './stock.thunk';

const symbols = [
  {
    symbol: 'AAPL',
  },
  {
    symbol: 'MSFT',
  },
  {
    symbol: 'NVDA',
  },
  {
    symbol: 'TSM',
  },
  {
    symbol: 'UNH',
  },
  {
    symbol: 'JNJ',
  },
  {
    symbol: 'V',
  },
  {
    symbol: 'WMT',
  },
  {
    symbol: 'BAC',
  },
  {
    symbol: 'HD',
  },
  {
    symbol: 'MA',
  },
  {
    symbol: 'XOM',
  },
  {
    symbol: 'CVX',
  },
  {
    symbol: 'PFE',
  },
];

const initialState = {
  stocksNames: symbols as { symbol: string }[],
  activeStocks: [] as { symbol: string }[],
};

export const stockSlice = createSlice({
  name: 'stocks',
  initialState,
  reducers: {
    setActiveStock: (state, action: PayloadAction<{ symbol: string }>) => {
      let counter = true;

      state.activeStocks.forEach((ev) => {
        if (ev.symbol === action.payload.symbol) {
          counter = false;
        }
      });
      if (counter) {
        // @ts-ignore
        state.activeStocks = [...state.activeStocks, action.payload];
      }
    },
    deleteStock: (state, action: PayloadAction<{ symbol: string }>) => {
      state.activeStocks = state.activeStocks.filter((ev) => ev.symbol !== action.payload.symbol);
    },
  },
  extraReducers: {
    [setStockThunk.fulfilled.type]: (state, action: PayloadAction<Array<{ symbol: string }>>) => {
      console.log('==========>action', action);
      // @ts-ignore
      state.stocksNames = action.payload;
    },
  },
});

export const { setActiveStock, deleteStock } = stockSlice.actions;

export default stockSlice.reducer;
