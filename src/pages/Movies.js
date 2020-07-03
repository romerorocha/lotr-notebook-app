import React, { useState, useEffect } from 'react';

import * as API from '../api/movies';

import MovieList from '../components/MovieList';
import PageTitle from '../components/PageTitle';

const Movies = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    API.getAllMovies().then(data => setMovies(data));
  }, []);

  return (
    <div>
      <PageTitle title="The Lord of The Rings" path="movies" />
      <MovieList
        title="Movies"
        movies={movies}
        setMovies={setMovies}
        filter={m => !(m.watched || m.bookmarked)}
      />
      <MovieList
        title="Watched"
        movies={movies}
        setMovies={setMovies}
        filter={m => m.watched}
      />
      <MovieList
        title="Bookmarked"
        movies={movies}
        setMovies={setMovies}
        filter={m => m.bookmarked}
      />
    </div>
  );
};

export default Movies;
