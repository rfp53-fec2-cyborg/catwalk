const express = require('express');
const dotenv = require('dotenv');
const axios = require('axios');
require('dotenv').config();

const url = process.env.SERVER;
const apiKey = process.env.API_KEY;

const getCart = async (data) => {
  var config = {
    method: 'get',
    url: `${url}/cart`,
    headers: {
      'Authorization': apiKey
    }
  };
  try {
    const response = await axios(config);
    console.log(response.data);
    return response.data;
  } catch (err) {s
    console.error(err);
  }
};

const postCart = async (data) => {
  var config = {
    method: 'post',
    url: `${url}/cart`,
    headers: {
      'Authorization': apiKey,
      'Content-Type': 'application/json'
    },
    body: data,
  };

  try {
    const response = await axios(config);
    return response.data;
  } catch (err) {
    console.error(err);
  }
};


module.exports = {
  getCart,
  postCart,
};