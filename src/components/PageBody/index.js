import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const PageBody = ({ children }) => {
  const classes = useStyles();

  return <div className={classes.root}>{children}</div>;
};

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: theme.spacing(10),
  },
}));

export default PageBody;
