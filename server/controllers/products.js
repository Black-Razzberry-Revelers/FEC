const models = require('../models');

exports.getProductById = (req, res) => {
  models.products
    .getProduct(req.query.product_id)
    .then((results) => {
      const styles = models.products.getProductStyles(req.query.product_id);
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
      return Promise.all([info, styles]);
    })
    .then((results) => {
      const resultsData = results[0].map((result, i) => (
        Object.assign(result.data, results[1][i].data)
      ));
      res.status(200).json(resultsData);
    })
    .catch((err) => {
      console.log('Error getting related products:', err);
      res.sendStatus(505);
    });
};
