import { Grid } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import Stars from '../Stars';

const BookReview = ({ review }) => {
  return (
    <>
      <Grid container spacing={1} alignItems="center">
        <Grid item>
          <Typography variant="subtitle2">{review.author}</Typography>
        </Grid>
        <Grid item xs>
          <Stars number={review.stars} />
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="body2">{review.text}</Typography>
      </Grid>
    </>
  );
};

export default BookReview;
