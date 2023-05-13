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
      // console.log('getProductById Error: ', err);
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
      console.log('Error getting related products:', err);
      res.sendStatus(505);
    });
};
