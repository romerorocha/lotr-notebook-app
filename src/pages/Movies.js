import React from 'react';
import MovieList from '../components/MovieList';
import Page from '../components/Page';

const Movies = () => {
  return (
    <Page>
      <MovieList title="Movies" filter={m => !(m.watched || m.bookmarked)} />
      <MovieList title="Watched" filter={m => m.watched} />
      <MovieList title="Bookmarked" filter={m => m.bookmarked} />
    </Page>
  );
};

export default Movies;
