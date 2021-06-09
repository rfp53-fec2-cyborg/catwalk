const express = require('express');
const dotenv = require('dotenv');
const axios = require('axios');
require('dotenv').config();

const url = process.env.SERVER;
const apiKey = process.env.API_KEY;

const getProducts = async (data) => {
  var config = {
    method: 'get',
    url: `${url}/products`,
    headers: {
      'Authorization': apiKey
    }
  };
  try {
    const response = await axios(config);
    return response.data;
  } catch (err) {
    console.error(err);
  }
};

const getProductsId = async (data) => {
  var config = {
    method: 'get',
    url: `${url}/products/${data}`,
    headers: {
      'Authorization': apiKey
    }
  };

  try {
    const response = await axios(config);
    return response.data;
  } catch (err) {
    console.error(err);
  }
};

const getProductsIdStyles = async (data) => {
  var config = {
    method: 'get',
    url: `${url}/products/${data}/styles`,
    headers: {
      'Authorization': apiKey
    }
  };

  try {
    const response = await axios(config);
    return response.data;
  } catch (err) {
    console.error(err);
  }
};

const getProductsIdRelated = async (data) => {
  var config = {
    method: 'get',
    url: `${url}/products/${data}/related`,
    headers: {
      'Authorization': apiKey
    }
  };

  try {
    const response = await axios(config);
    return response.data;
  } catch (err) {
    console.error(err);
  }
};

module.exports = {
  getProducts,
  getProductsId,
  getProductsIdStyles,
  getProductsIdRelated
};