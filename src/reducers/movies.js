import { createReducer } from '@reduxjs/toolkit';
import { loadMovies, updateMovie, voteMovie } from '../actions/movies';

const update = (state, action) =>
  state.map(m => (m._id === action.payload._id ? action.payload : m));

const cases = {
  [loadMovies.fulfilled]: (state, action) => action.payload,
  [updateMovie.fulfilled]: update,
  [voteMovie.fulfilled]: update,
};

export default createReducer([], cases);
