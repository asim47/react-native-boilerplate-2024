import { createSlice } from '@reduxjs/toolkit';
import { localStorage, StoredKeys } from '../../helpers/localStorage';
import { ConfigStore } from '../../interfaces';

const initialState: ConfigStore = {
  colorMode: null,
};

export const ConfigSlice = createSlice({
  name: 'Config',
  initialState,
  reducers: {
    setMode(state, action) {
      state.colorMode = action.payload;
      localStorage.setItem(StoredKeys.colorMode, action.payload);
    },
  },
});

export const { setMode } = ConfigSlice.actions;

export const ConfigReducer = ConfigSlice.reducer;
