import React, { useEffect, useState } from 'react';
import * as BooksAPI from '../api/books';
import BookList from '../components/BookList';
import CharacterList from '../components/CharacterList';
import MovieList from '../components/MovieList';
import Page from '../components/Page';

const Home = () => {
  const [books, setBooks] = useState([]);
  const reviewdBooks = books.filter(book => book.reviews.length > 0);

  useEffect(() => {
    BooksAPI.getAllBooks().then(books => setBooks(books));
  }, []);

  return (
    <Page>
      <CharacterList />
      <MovieList title="Bookmarked Movies" filter={m => m.bookmarked} />
      <BookList title="Reviewed Books" books={reviewdBooks} />
    </Page>
  );
};

export default Home;
