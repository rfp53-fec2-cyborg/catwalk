export const MakeRating = (ratings) => {

  const numReviews = Object.keys(ratings).reduce((sum, key) => {
    return sum + Number.parseInt(ratings[key]);
  }, 0);

  const value = Object.keys(ratings).reduce((avg, key) => {
    const score = Number.parseInt(key);
    const count = Number.parseInt(ratings[key]);
    return avg + (score * count / numReviews);
  }, 0).toPrecision(3);

  const findRoundedValue = () => {
    let score = ((value * 4).toFixed() / 4).toFixed(2);
    return score;
  };

  const findMaxRating = (data) => {
    var max = 0;
    for (var key in data) {
      max = Math.max(max, data[key]);
    }
    return max;
  };

  const rating = {
    numReviews,
    value,
    roundedValue: findRoundedValue(),
    maxRating: findMaxRating(ratings)
  };

  return rating;
};


export const reverseRatingFromHighestToLowestInArray = (data) => {
  let result = [];
  const ratingArr = Object.entries(data);
  ratingArr.forEach(([key, value]) => {
    let obj = {};
    obj[key] = Number(value);
    result.push(obj);
  });
  return result.reverse();
};