import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import * as API from './api/movies';

import Menu from './components/Menu';
import Home from './pages/Home';
import Movies from './pages/Movies';

const App = () => {
  const [allMovies, setAllMovies] = useState([]);

  useEffect(() => {
    API.getAllMovies().then(data => setAllMovies(data));
  }, []);

  const updateMovieState = (id, movie) => {
    const movies = allMovies.map(m => (m._id === id ? movie : m));
    setAllMovies(movies);
  };

  const handleUpdateMovie = (id, shelf) => {
    const changingProp = { [shelf]: true };
    API.update(id, changingProp).then(movie => updateMovieState(id, movie));
  };

  const handleResetMovie = id => {
    const resetProps = { bookmarked: false, watched: false };
    API.update(id, resetProps).then(movie => updateMovieState(id, movie));
  };

  const voteMovie = (id, option) => {
    API.vote(id, option).then(movie => {
      const movies = allMovies.map(m => {
        return m._id === id ? movie : m;
      });
      setAllMovies(movies);
    });
  };

  return (
    <div className="app">
      <BrowserRouter>
        <Menu />
        <Route exact path="/">
          <Home movies={allMovies} onResetMovie={handleResetMovie} />
        </Route>
        <Route path="/movies">
          <Movies
            allMovies={allMovies}
            onResetMovie={handleResetMovie}
            onUpdateMovie={handleUpdateMovie}
            onVote={voteMovie}
          />
        </Route>
      </BrowserRouter>
    </div>
  );
};

export default App;
