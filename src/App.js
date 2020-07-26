import React, { useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Menu from './components/Menu';
import BookDetails from './pages/BookDetails';
import Books from './pages/Books';
import CharacterDetails from './pages/CharacterDetails';
import CharacterSearch from './pages/CharacterSearch';
import Home from './pages/Home';
import Movies from './pages/Movies';
import { useDispatch } from 'react-redux';
import * as API from './api/movies';
import { loadMovies } from './actions/movies';
const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    API.getAllMovies().then(movies => {
      dispatch(loadMovies(movies));
    });
  }, [dispatch]);

  return (
    <div className="app">
      <h1>The Lord of The Rings Notebook</h1>
      <BrowserRouter>
        <Menu />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/movies">
            <Movies />
          </Route>
          <Route path="/books/:id">
            <BookDetails />
          </Route>
          <Route path="/books">
            <Books />
          </Route>
          <Route path="/character/:id">
            <CharacterDetails />
          </Route>
          <Route path="/search-character">
            <CharacterSearch />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
