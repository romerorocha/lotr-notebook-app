import React from 'react';
import Home from './Home';
import Books from './Books';
import Movies from './Movies';
import Characters from './Characters';
import CharactersSearch from './CharactersSearch';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './Header';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/books">
          <Books />
        </Route>
        <Route path="/movies">
          <Movies />
        </Route>
        <Route path="/characters">
          <Characters />
        </Route>
        <Route path="/characters-search">
          <CharactersSearch />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
