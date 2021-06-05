var models = require('../models');



module.exports = {
  get: function (req, res) {
    let url = `https://app-hrsei-api.herokuapp.com/api/fec2/rfp-54${endpoint}`;



  },
  getMeta: function (req, res) {

  },
  post: function (req, res) {

  },
  putHelpful: function (req, res) {

  },
  putReport: function (req, res) {

  }
};



/*
  module.exports = {
    get: (endpoint) => {
      let url = `https://app-hrsei-api.herokuapp.com/api/fec2/rfp-54${endpoint}`;

      reutrn axios({
        url,
        method: 'GET',
        headders: {
          ??????
          'Content-Type': 'application/json',
          Authorization: `${TOKEN}`,
        },
      });
    },

    add: (endpoint, data) => {
      let url = `https://app-hrsei-api.herokuapp.com/api/fec2/rfp-54${endpoint}`;

      return axios({
        url,

      })
    }
  }
*/