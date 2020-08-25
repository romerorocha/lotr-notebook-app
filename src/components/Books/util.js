export const getReviewsAverage = book => {
  if (!book.reviews || book.reviewCount === 0) {
    return 0;
  }

  const soma = book.reviews.reduce((acc, item) => {
    acc = acc + item.stars;
    return acc;
  }, 0);

  return soma / book.reviewCount;
};
