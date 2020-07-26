import { createAsyncThunk } from '@reduxjs/toolkit';
import * as API from '../api/books';

export const loadBooks = createAsyncThunk('books/load', () =>
  API.getAllBooks().then(books => books)
);
