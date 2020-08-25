import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Star from '@material-ui/icons/Star';
import { Grid } from '@material-ui/core';

const getReviewsAverage = book => {
  if (!book.reviews || book.reviews.length === 0) {
    return 0;
  }

  const soma = book.reviews.reduce((acc, item) => {
    acc = acc + item.stars;
    return acc;
  }, 0);

  return soma / book.reviews.length;
};

const Book = ({ book }) => {
  return (
    <Card>
      <CardHeader
        avatar={<Avatar>{getReviewsAverage(book)}</Avatar>}
        title={book.name}
      />
      <CardContent>
        <Grid container spacing={1} alignItems="center">
          <Grid item>
            <Typography variant="subtitle2">Pedro Júnior</Typography>
          </Grid>
          <Grid item xs>
            <Star />
            <Star />
            <Star />
            <Star />
            <Star />
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body2">
            Esse é um dos melhores livros da minha vida. Nunca pensaei que eu
            pudesse consumir uma obra dessa magnitude!
          </Typography>
        </Grid>
      </CardContent>
      <CardActions>
        <Button>Details</Button>
      </CardActions>
    </Card>
  );
};

export default Book;
