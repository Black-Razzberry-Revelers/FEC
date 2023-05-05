const express = require('express');
const controllers = require('./controllers')

const router = express.Router();
//Overview

//Products

//Reviews
router.get('/reviews', controllers.reviews.getListReviews);

//Questions and Answers

//Cart

//Ineractions

module.exports = router;

