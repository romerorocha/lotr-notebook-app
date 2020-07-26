import { configureStore } from '@reduxjs/toolkit';
import books from '../reducers/books';
import movies from '../reducers/movies';

const reducer = { books, movies };
export const store = configureStore({ reducer });
