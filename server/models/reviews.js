const axios = require('axios');

exports.listReviews = (
  page = 1,
  count = 5,
  sort = 'newest',
  product_id = 40344,
) => {
  const options = {
    method: 'get',
    url: `${process.env.URL}/reviews`,
    headers: {
      Authorization: `${process.env.TOKEN}`,
    },
    params: {
      page,
      count,
      sort,
      product_id,
    },
  };
  return axios(options);
};

exports.reviewsMetadata = (product_id = 40344) => {
  const options = {
    method: 'get',
    url: `${process.env.URL}/reviews/meta`,
    headers: {
      Authorization: `${process.env.TOKEN}`,
    },
    params: {
      product_id,
    },
  };
  return axios(options);
};

exports.relatedReviewsMetaData = (productIds) => {
  const apiCalls = productIds.map((productId) => exports.reviewsMetadata(productId));
  return Promise.all(apiCalls);
};

exports.addReview = (
  product_id,
  rating,
  summary,
  body,
  recommend,
  name,
  email,
  photos,
  characteristics,
) => {
  const options = {
    method: 'post',
    url: `${process.env.URL}/reviews`,
    headers: {
      Authorization: `${process.env.TOKEN}`,
    },
    data: {
      product_id,
      rating,
      summary,
      body,
      recommend,
      name,
      email,
      photos,
      characteristics,
    },
  };
  return axios(options);
};

exports.markReviewAsHelpful = (review_id) => {
  const options = {
    method: 'put',
    url: `${process.env.URL}/reviews/${review_id}/helpful`,
    headers: {
      Authorization: `${process.env.TOKEN}`,
    },
  };
  return axios(options);
};

exports.reportReview = (review_id) => {
  const options = {
    method: 'put',
    url: `${process.env.URL}/reviews/${review_id}/report`,
    headers: {
      Authorization: `${process.env.TOKEN}`,
    },
  };
  return axios(options);
};
