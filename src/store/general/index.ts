import { Near, WalletConnection } from 'near-api-js';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Connectors {
  near?: Near;
  walletConnection?: WalletConnection;
}

const initialState: Connectors = {};

const generalSlice = createSlice({
  name: 'general',

  initialState,

  reducers: {
    setConnections(state, action: PayloadAction<Connectors>) {
      state.near = action.payload?.near;
      state.walletConnection = action.payload?.walletConnection;
    },
  },
});

export default generalSlice.reducer;
export const generalActions = generalSlice.actions;
