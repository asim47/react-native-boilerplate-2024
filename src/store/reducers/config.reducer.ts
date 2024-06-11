import { createSlice } from '@reduxjs/toolkit';
import { localStorage, StoredKeys } from '../../helpers/localStorage';
import { ConfigStore } from '../../interfaces';

const initialState: ConfigStore = {
  colorMode: 'dark',
};

export const ConfigSlice = createSlice({
  name: 'Config',
  initialState,
  reducers: {
    setColorMode(state, action) {
      localStorage.setItem(StoredKeys.colorMode, action.payload);
      state.colorMode = action.payload;
    },
  },
});

export const { setColorMode } = ConfigSlice.actions;

export const ConfigReducer = ConfigSlice.reducer;
