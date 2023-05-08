const models = require('../models');

exports.getRelatedProducts = (req, res) => {
  models.products
    .getRelatedProducts(req.params.product_id)
    .then((results) => (
      models.products.getRelatedProductInfo(results.data)
    ))
    .then((results) => {
      const resultsData = results.map((result) => result.data);
      res.status(200).json(resultsData);
    })
    .catch((err) => {
      console.log('Error getting related products:', err);
      res.sendStatus(505);
    });
};
