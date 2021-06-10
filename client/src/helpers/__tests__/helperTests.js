import { stringToDate } from '../dateFunctions.js';
import { quickSort } from '../sort.js';
const { reviews } = require ('../../../mock-data/reviews.js');

it ('Date value returned from databse is shown in proper Month DD, YYYY format', () => {
  const dateExample1 = '2021-06-05T00:00:00.000Z';
  const dateExample2 = '2021-01-01T00:00:00.000Z';
  const dateExample3 = '2021-12-31T00:00:00.000Z';
  const dateExample4 = '2021-03-15T00:00:00.000Z';

  expect(stringToDate(dateExample1)).toBe('June 5, 2021');
  expect(stringToDate(dateExample2)).toBe('January 1, 2021');
  expect(stringToDate(dateExample3)).toBe('December 31, 2021');
  expect(stringToDate(dateExample4)).toBe('March 15, 2021');
});

it ('Helpfulness sort should sort by highest helpfulness rating', () => {
  const data = quickSort(reviews.results, 'helpful');

  expect(data[0].review_id).toBe(348114);
  expect(data[data.length - 1].review_id).toBe(348118);
});

it ('Newest sort should sort by newest ratings by date', () => {
  const data = quickSort(reviews.results, 'newest');

  expect(data[0].review_id).toBe(406625);
  expect(data[data.length - 1].review_id).toBe(348118);
});

it ('Relevant sort should sort by newest and helpfulness', () => {
  const helpfulArr = quickSort(reviews.results, 'helpful');
  const newestArr = quickSort(reviews.results, 'newest');
  const relevantArr = [];

  for (var i = 0; i < helpfulArr.length; i++) {
    if (helpfulArr[i].review_id === newestArr[i].review_id) {
      relevantArr.push(helpfulArr[i]);
    } else {
      relevantArr.push(newestArr[i]);
    }
  }

  expect(relevantArr[0].review_id).toBe(406625);
  expect(relevantArr[relevantArr.length - 1].review_id).toBe(348118);
});