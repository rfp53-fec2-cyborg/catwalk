/* eslint-disable no-console */
const express = require('express');
const path = require('path');
const compression = require('compression');
const app = express();
const port = 3000;

require('dotenv').config({path: 'server/.env'});
const { getProducts, getProductsId, getProductsIdRelated, getProductsIdStyles } = require('./productApi.js');
const { getReviews, getReviewsMeta, postReview, putReviewHelpful, putReviewReport, uploadPhoto } = require('./reviewApi.js');
const { getCart, postCart } = require('./cartApi.js');
const { postInteractions } = require('./interactionsApi.js');

app.use(compression({level: 1}));
app.use(express.json({limit: '50mb'}));
app.use(express.static(path.join(__dirname, '../client/dist')));

app.get('/', (req, res) => {
  res.end();
});

/*
############################ PRODUCTS ############################
*/

app.get('/products', async (req, res) => {
  try {
    const data = await getProducts();
    res.json(data);
  } catch (err) {
    res.status(500).send(err.code);
  }
});

app.get('/products/:productID', async (req, res) => {
  const productID = req.params.productID;
  try {
    const data = await getProductsId(productID);
    res.json(data);
  } catch (err) {
    res.status(500).send(err.code);
  }
});

app.get('/products/:productID/styles', async (req, res) => {
  const productID = req.params.productID;
  try {
    const data = await getProductsIdStyles(productID);
    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).send(err.code);
  }
});

app.get('/products/:productID/related', async (req, res) => {
  const productID = req.params.productID;
  try {
    const data = await getProductsIdRelated(productID);
    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).send(err.code);
  }
});

/*
############################ REVIEWS ############################
*/

app.get('/reviews', async (req, res) => {
  // console.log(req.query);
  const params = req.query;
  try {
    const data = await getReviews(params);
    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).send(err.code);
  }
});

app.get('/reviews/meta', async (req, res) => {
  // console.log(req.query);
  const params = req.query;
  try {
    const data = await getReviewsMeta(params);
    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).send(err.code);
  }
});

app.post('/reviews', async (req, res) => {
  // console.log(req.body);
  const body = JSON.stringify(req.body);
  try {
    await postReview(body);
    res.status(201);
    res.end();
  } catch (err) {
    console.error(err);
    res.status(500).send(err.code);
  }
});

app.put('/reviews/:review_id/helpful', async (req, res) => {
  // console.log(req.params);
  const reviewID = req.params.review_id;
  try {
    await putReviewHelpful(reviewID);
    res.status(204);
    res.end();
  } catch (err) {
    console.error(err);
    res.status(500).send(err.code);
  }
});

app.put('/reviews/:review_id/report', async (req, res) => {
  // console.log(req.params);
  const reviewID = req.params.review_id;
  try {
    await putReviewReport(reviewID);
    res.status(204);
    res.end();
  } catch (err) {
    console.error(err);
    res.status(500).send(err.code);
  }
});

/*
############################ CART ############################
*/

app.get('/cart', async (req, res) => {
  try {
    const data = await getCart();
    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).send(err.code);
  }
});

app.post('/cart', async (req, res) => {
  try {
    await postCart(req.body);
    res.status(201);
    res.end();
  } catch (err) {
    console.error(err);
    res.status(500).send(err.code);
  }
});

/*
############################ INTERACTIONS ############################
*/

app.post('/interactions', async (req, res) => {
  // console.log(req.body);
  // const body = JSON.stringify(req.body);
  const body = req.body;
  try {
    const data = await postInteractions(body);
    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).send(err.code);
  }
});

/*
############################ UPLOAD PHOTOS ############################
*/

app.post('/upload-photo', async (req, res) => {
  // console.log(req.body);
  try {
    const data = await uploadPhoto(req.body);
    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).send(err.code);
  }
});


app.listen(port, () => {
  console.log(`Catborg app listening at http://localhost:${port}`);
});

