const models = require('../models');

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
