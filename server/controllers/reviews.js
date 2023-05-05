const models = require('../models');

exports.getListReviews = (req, res) => {
  models.reviews
    .listReviews(
      req.query.page,
      req.query.count,
      req.query.sort,
      req.query.product_id
    )
    .then((result) => res.status(200).send(result.data))
    .catch((err) => {
      console.log('CONTROLLER REVIEWS GET LIST REVIEWS', err);
      res.sendStatus(505);
    });
};
