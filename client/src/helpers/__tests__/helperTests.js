import { stringToDate } from '../dateFunctions.js';


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
