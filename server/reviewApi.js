const express = require('express');
const dotenv = require('dotenv');
const axios = require('axios');
require('dotenv').config();

const url = process.env.SERVER;
const apiKey = process.env.API_KEY;

const getReviews = async (data) => {
  var config = {
    method: 'get',
    url: `${url}/reviews/?page=${data.page}&count=${data.count}&sort=${data.sort}&product_id=${data.product_id}`,
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

const getReviewsMeta = async (data) => {
  var config = {
    method: 'get',
    url: `${url}/reviews/meta/?product_id=${data.product_id}`,
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

const postReview = async (data) => {
  var config = {
    method: 'post',
    url: `${url}/reviews`,
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

const putReviewHelpful = async (data) => {
  var config = {
    method: 'put',
    url: `${url}/reviews/${data}/helpful`,
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

const putReviewReport = async (data) => {
  var config = {
    method: 'put',
    url: `${url}/reviews/${data}/report`,
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
  getReviews,
  getReviewsMeta,
  postReview,
  putReviewHelpful,
  putReviewReport
};