const express = require('express');
const dotenv = require('dotenv');
const axios = require('axios');
require('dotenv').config();

const url = process.env.SERVER;
const apiKey = process.env.API_KEY;

const postInteractions = async (data) => {
  var config = {
    method: 'post',
    url: `${url}/interactions`,
    headers: {
      'Authorization': apiKey
    },
    body: data
  };
  try {
    const response = await axios(config);
    return response.data;
  } catch (err) {
    console.error(err);
    throw err;
  }
};

module.exports = {
  postInteractions
};