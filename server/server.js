/* eslint-disable no-console */
const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, '../client/dist')));

app.get('/', (req, res) => {
  res.end();
});

app.get('/products', (req, res) => {
  // console.log('req.query:', req.query);
  res.send();
});

app.get('/products:productID', (req, res) => {
  // console.log('req.params:', req.params);
  res.send();
});

app.get('/products:productID/styles', (req, res) => {
  // console.log('req.params:', req.params);
  res.send();
});

app.get('/products:productID/related', (req, res) => {
  // console.log('req.params:', req.params);
  res.send();
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

