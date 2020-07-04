import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Menu from './components/Menu';
import BookDetails from './pages/BookDetails';
import Books from './pages/Books';
import Home from './pages/Home';
import Movies from './pages/Movies';

const App = () => {
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
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
