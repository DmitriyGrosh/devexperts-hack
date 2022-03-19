import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { setStockThunk } from './stock.thunk';

const initialState = {
  stocksNames: [] as { id: string }[],
  activeStocks: [] as { id: string }[],
};

export const stockSlice = createSlice({
  name: 'stocks',
  initialState,
  reducers: {
    setActiveStock: (state, action: PayloadAction<{ id: string }>) => {
      let counter = true;

      state.activeStocks.forEach((ev) => {
        if (ev.id === action.payload.id) {
          counter = false;
        }
      });
      if (counter) {
        // @ts-ignore
        state.activeStocks = [...state.activeStocks, action.payload];
      }
    },
    deleteStock: (state, action: PayloadAction<{ id: string }>) => {
      state.activeStocks = state.activeStocks.filter((ev) => ev.id !== action.payload.id);
    },
  },
  extraReducers: {
    [setStockThunk.fulfilled.type]: (state, action: PayloadAction<Array<{ id: string }>>) => {
      console.log('==========>action', action);
      // @ts-ignore
      state.stocksNames = action.payload;
    },
  },
});

export const { setActiveStock, deleteStock } = stockSlice.actions;

export default stockSlice.reducer;
