import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import boardReducer from '../features/puluc_board/boardSlice';
import pawnReducer from '../features/puluc_board/pawnSlice';

export default configureStore({
  reducer: {
    counter: counterReducer,
    board: boardReducer,
    pawn: pawnReducer
  }
});
