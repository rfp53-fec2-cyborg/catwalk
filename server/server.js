/* eslint-disable no-console */
const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

// app.use(express.json()); // do we need this?

app.use(express.static(path.join(__dirname, '../client/dist')));

// app.use(express.urlencoded({extended: false })); // will we need this?

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

