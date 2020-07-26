import { createStore, combineReducers } from 'redux';
import movies from '../reducers/movies';

const reducers = combineReducers({ movies });

export const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
