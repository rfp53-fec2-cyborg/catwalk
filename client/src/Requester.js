import axios from 'axios';

const SERVER_URL = 'http://localhost:3000';

// The Requester function returns a requester object with methods that can be used to issue
// requests to the server
const Requester = () => {
  const requester = {};

  // PRIVATE METHODS
  // These are the generic axios request methods along with some basic handling of the result.
  // They are "private methods" because they are available to the requester object in the closure,
  // but they are not directly available to users of the requester object

  const printErrorInfo = (error) => {
    console.log(error);
    if (error.response) {
      console.log('Error data:', error.response.data);
      console.log('Error status:', error.response.status);
      console.log('Error headers:', error.response.headers);
      console.log('Error params:', error.response.config.params);
      return error.response.data;
    } else if (error.request) {
      console.log('Error:', error.request);
      return error.request;
    } else {
      console.log('Error:', error.message);
      return error.message;
    }
  };

  const get = (endpoint, params) => {
    return axios.get(`${SERVER_URL}/${endpoint}`, { params })
      .then((response) => {
        return response.data;
      })
      .catch(err => {
        printErrorInfo(err);
        throw err;
      });
  };

  const post = (endpoint, data, params) => {
    return axios.post(`${SERVER_URL}/${endpoint}`, data)
      .then((response) => {
        return response.data;
      })
      .catch(err => {
        printErrorInfo(err);
        throw err;
      });
  };

  const put = (endpoint) => {
    return axios.put(`${SERVER_URL}/${endpoint}`)
      .then((response) => {
        return response.data;
      })
      .catch(err => {
        printErrorInfo(err);
        throw err;
      });
  };

  // PUBLIC METHODS
  // These methods are explicitly attached to the requester object and are available to users of
  // the requester object.
  requester.getProducts = (params) => {
    return get('products', params);
  };

  requester.getProduct = (productID) => {
    return get(`products/${productID}`);
  };

  requester.getProductStyles = (productID) => {
    return get(`products/${productID}/styles`);
  };

  requester.getRelatedProducts = (productID) => {
    return get(`products/${productID}/related`);
  };

  requester.getReviews = (params) => {
    return get('reviews', params);
  };

  requester.getReviewsMeta = (params) => {
    return get('reviews/meta', params);
  };

  requester.postReview = (data) => {
    return post('reviews', data);
  };

  requester.markReviewHelpful = (reviewID) => {
    return put(`reviews/${reviewID}/helpful`);
  };

  requester.reportReview = (reviewID) => {
    return put(`reviews/${reviewID}/report`);
  };

  requester.getCart = () => {
    return get('cart');
  };

  requester.addToCart = (data) => {
    return post('cart', data);
  };

  requester.uploadImage = (data) => {
    return post('upload-photo', data);
  };

  return requester;
};

export default Requester;