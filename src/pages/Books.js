import React, { useEffect, useState } from 'react';
import * as API from '../api/books';
import BookList from '../components/BookList';
import Page from '../components/Page';

const Books = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    API.getAllBooks().then(books => setBooks(books));
  }, []);

  return (
    <Page>
      <BookList title='"Lord of The Rings" books' books={books} />
    </Page>
  );
};

export default Books;
