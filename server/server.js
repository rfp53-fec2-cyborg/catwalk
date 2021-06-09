/* eslint-disable no-console */
const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

require('dotenv').config({path: 'server/.env'});
const { getProducts, getProductsId, getProductsIdRelated, getProductsIdStyles } = require('./productApi.js');


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

app.get('/reviews', (req, res) => {
  // console.log('req.query:', req.query);
  res.send();
});

app.get('/reviews/meta', (req, res) => {
  // console.log('req.query:', req.query);
  res.send();
});

app.get('/cart', (req, res) => {
  res.send();
});

app.post('/reviews', (req, res) => {
  // console.log('req.body:', req.body);
  res.send();
});

app.post('/cart', (req, res) => {
  // console.log('req.body:', req.body);
  res.send('fooo');
});

app.put('/reviews:review_id/helpful', (req, res) => {
  // console.log('req.params:', req.params);
  res.send();
});

app.put('/reviews:review_id/report', (req, res) => {
  // console.log('req.params:', req.params);
  res.send();
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

