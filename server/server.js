/* eslint-disable no-console */
const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

require('dotenv').config({path: 'server/.env'});
const { getProducts, getProductsId, getProductsIdRelated, getProductsIdStyles } = require('./productApi.js');
const { getReviews, getReviewsMeta, postReview, putReviewHelpful, putReviewReport } = require('./reviewApi.js');

app.use(express.json());
app.use(express.static(path.join(__dirname, '../client/dist')));

app.get('/', (req, res) => {
  res.end();
});

app.get('/products', async (req, res) => {
  try {
    const data = await getProducts();
    res.json(data);
  } catch (err) {
    console.error(err);
    res.end();
  }
});

app.get('/products/:productID', async (req, res) => {
  const productID = req.params.productID;
  try {
    const data = await getProductsId(productID);
    res.json(data);
  } catch (err) {
    console.error(err);
    res.end();
  }
});

app.get('/products/:productID/styles', async (req, res) => {
  const productID = req.params.productID;
  try {
    const data = await getProductsIdStyles(productID);
    res.json(data);
  } catch (err) {
    console.error(err);
    res.end();
  }
});

app.get('/products/:productID/related', async (req, res) => {
  const productID = req.params.productID;
  try {
    const data = await getProductsIdRelated(productID);
    res.json(data);
  } catch (err) {
    console.error(err);
    res.end();
  }
});

app.get('/reviews', async (req, res) => {
  const params = req.query;
  try {
    const data = await getReviews(params);
    res.json(data);
  } catch (err) {
    console.error(err);
    res.end();
  }
});

app.get('/reviews/meta', async (req, res) => {
  const params = req.query;
  try {
    const data = await getReviewsMeta(params);
    res.json(data);
  } catch (err) {
    console.error(err);
    res.end();
  }
});

app.get('/cart', (req, res) => {
  res.send();
});

app.post('/reviews', async (req, res) => {
  const body = JSON.stringify(req.body);
  try {
    const data = await postReview(body);
    res.json(data);
  } catch (err) {
    console.error(err);
    res.end();
  }
});

app.post('/cart', (req, res) => {
  // console.log('req.body:', req.body);
  res.send('fooo');
});

app.put('/reviews/:review_id/helpful', async (req, res) => {
  const productID = req.params.productID;
  try {
    const data = await putReviewHelpful(productID);
    res.json(data);
  } catch (err) {
    console.error(err);
    res.end();
  }
});

app.put('/reviews/:review_id/report', async (req, res) => {
  const productID = req.params.productID;
  try {
    const data = await putReviewReport(productID);
    res.json(data);
  } catch (err) {
    console.error(err);
    res.end();
  }
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

