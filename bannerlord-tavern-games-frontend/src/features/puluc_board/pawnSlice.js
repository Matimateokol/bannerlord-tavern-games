import { createSlice } from '@reduxjs/toolkit';

export const pawnSlice = createSlice({
  name: 'pawn',
  initialState: {
    pawnId: null,
    pawnColor: 'blackPawn'
  },
  reducers: {
    select: (state, action) => {
      if (state.pawnId !== action.payload.pawnId && state.pawnColor !== action.payload.pawnColor) {
        state.pawnId = action.payload.pawnId;
        state.pawnColor = action.payload.pawnColor;
      } else {
        state.pawnId = null;
        state.pawnColor = 'invisible';
      }
    }
  }
});

export const { select } = pawnSlice.actions;

export default pawnSlice.reducer;
