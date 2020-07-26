import { createReducer } from '@reduxjs/toolkit';
import { loadBooks } from '../actions/books';

const cases = {
  [loadBooks.fulfilled]: (state, action) => action.payload,
};

export default createReducer([], cases);
