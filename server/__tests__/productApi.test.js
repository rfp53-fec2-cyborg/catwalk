// jest.mock('./productApi');



/*
  Prioritize mocking functions to test API results
*/

test('Always passing test', () => {
  expect(1).toEqual(1);
});

// require('dotenv').config({path: 'server/.env'});

// const { getProducts, getProductsId, getProductsIdRelated, getProductsIdStyles } = require('../productApi.js');

// // The assertion for a promise must be returned.
// it('Returns an array of products when calling /GET products', async () => {
//   expect.assertions(1);
//   let data = await getProducts();
//   expect(data.length).toBeGreaterThanOrEqual(1);
// });