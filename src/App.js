import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { loadBooks } from './actions/books';
import { loadMovies } from './actions/movies';
import Menu from './components/Menu';
import BookDetails from './pages/BookDetails';
import Books from './pages/Books';
import CharacterDetails from './pages/CharacterDetails';
import CharacterSearch from './pages/CharacterSearch';
import Home from './pages/Home';
import Movies from './pages/Movies';
const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadMovies());
    dispatch(loadBooks());
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
