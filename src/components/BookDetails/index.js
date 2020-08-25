import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getBook } from '../../api/books';
import BookReview from '../BookReview';
import { getReviewsAverage } from '../Books/util';

const review = {
  author: 'Pedro Júnior',
  stars: 3,
  text:
    'Esse é um dos melhores livros da minha vida. Nunca pensaei que eu pudesse consumir uma obra dessa magnitude!',
};

const BookDetails = () => {
  const classes = useStyles();
  const { id } = useParams();

  const [book, setBook] = useState({});

  useEffect(() => {
    getBook(id).then(book => setBook(book));
  }, [id]);

  return (
    <Paper className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h6">{book.name}</Typography>
          <Typography variant="body1">
            Review Count: {book.reviewCount}
          </Typography>
          <Typography variant="body1">
            Stars: {getReviewsAverage(book)}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Divider />
        </Grid>
        <Grid item spacing={1} xs={12}>
          <Paper className={classes.review} variant="outlined">
            <BookReview review={review} />
          </Paper>
          <Paper className={classes.review} variant="outlined">
            <BookReview review={review} />
          </Paper>
          <Paper className={classes.review} variant="outlined">
            <BookReview review={review} />
          </Paper>
          <Paper className={classes.review} variant="outlined">
            <BookReview review={review} />
          </Paper>
        </Grid>
      </Grid>
    </Paper>
  );
};

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(2),
  },
  review: {
    padding: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

export default BookDetails;
