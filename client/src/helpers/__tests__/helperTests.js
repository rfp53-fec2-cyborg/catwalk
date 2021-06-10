import { stringToDate } from '../dateFunctions.js';
import { sort } from '../sort.js';
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

var sortObj = sort(reviews.results);
it ('Helpfulness sort should sort by highest helpfulness rating', () => {
  expect(sortObj.Helpful[0].review_id).toBe(348114);
  expect(sortObj.Helpful[sortObj.Helpful.length - 1].review_id).toBe(348118);
});

it ('Newest sort should sort by newest ratings by date', () => {
  expect(sortObj.Newest[0].review_id).toBe(406625);
  expect(sortObj.Newest[sortObj.Newest.length - 1].review_id).toBe(348118);
});

it ('Relevant sort should sort by newest and helpfulness', () => {
  expect(sortObj.Relevant[0].review_id).toBe(406625);
  expect(sortObj.Relevant[sortObj.Newest.length - 1].review_id).toBe(348118);
});