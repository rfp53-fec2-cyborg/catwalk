const express = require('express');
const dotenv = require('dotenv');
const axios = require('axios');
require('dotenv').config();

const url = process.env.SERVER;
const apiKey = process.env.API_KEY;
const cloudinaryUrl = process.env.CLOUDINARY_URL;
const cloudinaryPreset = process.env.CLOUDINARY_PRESET;

const getReviews = async (params) => {
  var config = {
    method: 'get',
    url: `${url}/reviews`,
    params,
    headers: {
      'Authorization': apiKey
    }
  };
  try {
    const response = await axios(config);
    return response.data;
  } catch (err) {
    console.error(err);
    throw err;
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
    throw err;
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
    data: data,
  };

  try {
    const response = await axios(config);
    return response.data;
  } catch (err) {
    console.error(err);
    throw err;
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
    throw err;
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
    throw err;
  }
};

const uploadPhoto = async ({file}) => {

  const formData = {file, 'upload_preset': cloudinaryPreset};

  try {
    var config = {
      method: 'post',
      url: cloudinaryUrl,
      data: formData,
    };
    const response = await axios(config);
    return response.data.url;
  } catch (err) {
    console.error(err);
    throw err;
  }
};

module.exports = {
  getReviews,
  getReviewsMeta,
  postReview,
  putReviewHelpful,
  putReviewReport,
  uploadPhoto
};