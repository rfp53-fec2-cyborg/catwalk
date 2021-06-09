import mockAxios from 'axios';
const { getProducts, getProductsId, getProductsIdRelated, getProductsIdStyles } = require('../productApi.js');

// The assertion for a promise must be returned.
it('Returns an array of products when calling /GET products', async () => {

  const data = await getProducts();
  expect(data).toEqual(['test']);
});