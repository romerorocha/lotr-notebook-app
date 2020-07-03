import React, { useState, useEffect } from 'react';

import * as API from '../api/movies';

import MovieList from '../components/MovieList';
import PageTitle from '../components/PageTitle';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    API.getAllMovies().then(data => setMovies(data));
  }, []);

  return (
    <div>
      <PageTitle title="The Lord of The Rings" path="" />
      <MovieList
        title="Bookmarked Movies"
        movies={movies}
        filter={m => m.bookmarked}
        setMovies={setMovies}
      />
    </div>
  );
};

export default Home;
