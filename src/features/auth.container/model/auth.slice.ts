import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  name: '',
  isAuth: false,
  id: 0,
};

export const authSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setLogin: (state, action: PayloadAction<{ name: string; id: number }>) => {
      const { name, id } = action.payload;
      return {
        ...state,
        name,
        id,
        isAuth: true,
      };
    },
    setLogout: (state) => {
      return {
        ...state,
        name: '',
        isAuth: false,
        id: 0,
      };
    },
  },
});

export const { setLogin, setLogout } = authSlice.actions;

export default authSlice.reducer;
