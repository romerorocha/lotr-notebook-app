import React, { useState, useEffect } from 'react';
import Book from './Book';
import Grid from '@material-ui/core/Grid';
import { getAllBooks } from '../../api/books';

const Books = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    getAllBooks().then(books => setBooks(books));
  }, []);

  return (
    <Grid container spacing={1}>
      {books.map(b => (
        <Grid key={b._id} item xs={12} lg={4}>
          <Book book={b} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Books;
