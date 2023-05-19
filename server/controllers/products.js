const models = require('../models');

exports.getProductById = (req, res) => {
  models.products
    .getProduct(req.params.product_id)
    .then((results) => {
      const styles = models.products.getProductStyles(req.params.product_id);
      return Promise.all([results.data, styles]);
    })
    .then((results) => {
      data = {
        product: results[0],
        styles: results[1].data,
      };
      console.log('sending data to Front-end');
      res.status(202).send(data);
    })
    .catch((err) => {
      res.sendStatus(505);
    });
};

exports.getRelatedProducts = (req, res) => {
  models.products
    .getRelatedProducts(req.params.product_id)
    .then((results) => {
      const info = models.products.getRelatedProductInfo(results.data, '');
      const styles = models.products.getRelatedProductInfo(results.data, '/styles');
      const meta = models.reviews.relatedReviewsMetaData(results.data);
      return Promise.all([info, styles, meta]);
    })
    .then((results) => {
      const data = {
        products: results[0].map((result) => result.data),
        styles: results[1].map((result) => result.data),
        meta: results[2].map((result) => result.data),
      };
      res.status(200).json(data);
    })
    .catch((err) => {
      if (err.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.log('Error Response Data:', err.response.data);
        console.log('Error Response Status:', err.response.status);
        console.log('Error Response Headers:', err.response.headers);
      } else if (err.request) {
        // The request was made but no response was received
        // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
        // http.ClientRequest in node.js
        console.log('Error Request:', err.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.log('Error:', err.message);
      }
      console.log('Error Config', err.config);
      res.sendStatus(505);
    });
};
