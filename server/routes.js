const express = require('express');
const controllers = require('./controllers');

const router = express.Router();
// Overview

// Products

// Reviews
router.get('/reviews', controllers.reviews.getListReviews);
router.get('/reviews/meta', controllers.reviews.getReviewsMetadata);
router.post('/reviews', controllers.reviews.postReview);
router.put('/reviews/:review_id/helpful', controllers.reviews.putReviewAsHelpful);
router.put('/reviews/:review_id/report', controllers.reviews.putReportReview);

// Questions and Answers

// Cart

// Ineractions

module.exports = router;
