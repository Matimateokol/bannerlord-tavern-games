import { createSlice } from '@reduxjs/toolkit';
import { initialPulucBoardState } from '../../data/initialPulucBoardState';

export const boardSlice = createSlice({
  name: 'board',
  initialState: {
    value: initialPulucBoardState
  },
  reducers: {
    movePawn: (state, selectedPawn, oldRow, oldCol, newRow, newCol) => {
      state.value[newRow][newCol] = selectedPawn;
      state.value[oldRow][oldCol] = null;
    }
  }
});

export const { movePawn } = boardSlice.actions;

export default boardSlice.reducer;
