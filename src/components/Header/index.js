import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import { Link } from 'react-router-dom';

const Menu = ({ to, children }) => (
  <Button color="inherit" component={Link} to={to}>
    {children}
  </Button>
);

const Header = () => {
  const classes = useStyles();

  return (
    <AppBar position="absolute">
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          The Lord of The Rings App
        </Typography>
        <Menu to="/">Home</Menu>
        <Menu to="/books">Books</Menu>
        <Menu to="/movies">Movies</Menu>
        <Menu to="/characters">Characters</Menu>
        <Menu to="/characters-search">Search</Menu>
      </Toolbar>
    </AppBar>
  );
};

const useStyles = makeStyles(theme => ({
  title: {
    flexGrow: 1,
  },
}));

export default Header;
