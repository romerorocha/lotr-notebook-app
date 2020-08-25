import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import React from 'react';
import { Link } from 'react-router-dom';
import BookReview from '../BookReview';
import { getReviewsAverage } from './util';

const review = {
  author: 'Pedro Júnior',
  stars: 3,
  text:
    'Esse é um dos melhores livros da minha vida. Nunca pensaei que eu pudesse consumir uma obra dessa magnitude!',
};

const Book = ({ book }) => {
  return (
    <Card>
      <CardHeader
        avatar={<Avatar>{getReviewsAverage(book)}</Avatar>}
        title={book.name}
      />
      <CardContent>
        <BookReview review={review} />
      </CardContent>
      <CardActions>
        <Button component={Link} to={`/books/${book._id}`}>
          Details
        </Button>
      </CardActions>
    </Card>
  );
};

export default Book;
