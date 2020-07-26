export const LOAD_BOOKS = 'LOAD_BOOKS';

export const loadBooks = books => ({
  type: LOAD_BOOKS,
  books,
});
