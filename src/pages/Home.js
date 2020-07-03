import React, { useState, useEffect } from 'react';

import * as API from '../api/movies';

import MovieList from '../components/MovieList';
import Page from '../components/Page';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    API.getAllMovies().then(data => setMovies(data));
  }, []);

  return (
    <Page>
      <MovieList
        title="Bookmarked Movies"
        movies={movies}
        filter={m => m.bookmarked}
        setMovies={setMovies}
      />
    </Page>
  );
};

export default Home;
