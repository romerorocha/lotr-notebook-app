import { createStore, combineReducers } from 'redux';
import movies from '../reducers/movies';
import books from '../reducers/books';

const reducers = combineReducers({ movies, books });

export const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
