import React from 'react';
import BookList from '../components/BookList';
import CharacterList from '../components/CharacterList';
import MovieList from '../components/MovieList';
import Page from '../components/Page';

const Home = () => {
  return (
    <Page>
      <CharacterList />
      <MovieList title="Bookmarked Movies" filter={m => m.bookmarked} />
      <BookList title="Reviewed Books" filter={b => b.reviews.length > 0} />
    </Page>
  );
};

export default Home;
