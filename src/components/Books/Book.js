import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Star from '@material-ui/icons/Star';
import StarBorder from '@material-ui/icons/StarBorder';
import { Grid } from '@material-ui/core';

const review = {
  author: 'Pedro Júnior',
  stars: 3,
  text:
    'Esse é um dos melhores livros da minha vida. Nunca pensaei que eu pudesse consumir uma obra dessa magnitude!',
};

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

const Stars = ({ number }) => {
  const stars = [];
  for (let i = 0; i < number; i++) {
    stars.push(<Star key={i} />);
  }

  while (stars.length < 5) {
    stars.push(<StarBorder />);
  }
  return stars;
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
            <Typography variant="subtitle2">{review.author}</Typography>
          </Grid>
          <Grid item xs>
            <Stars number={review.stars} />
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body2">{review.text}</Typography>
        </Grid>
      </CardContent>
      <CardActions>
        <Button>Details</Button>
      </CardActions>
    </Card>
  );
};

export default Book;
