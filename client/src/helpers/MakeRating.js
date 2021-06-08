const MakeRating = (ratings) => {

  const numReviews = Object.keys(ratings).reduce((sum, key) => {
    return sum + Number.parseInt(ratings[key]);
  }, 0);

  const value = Object.keys(ratings).reduce((avg, key) => {
    const score = Number.parseInt(key);
    const count = Number.parseInt(ratings[key]);
    return avg + (score * count / numReviews);
  }, 0).toPrecision(3);

  const rating = {
    numReviews,
    value
  };

  return rating;
};

export default MakeRating;