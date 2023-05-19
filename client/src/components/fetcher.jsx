import React from 'react';
import axios from 'axios';

export default {
  getListReviews: (
    page = 1,
    count = 5,
    sort = 'newest',
    product_id = 40346,
  ) => {
    const options = {
      url: 'api/reviews',
      method: 'get',
      params: {
        page,
        count,
        sort,
        product_id,
      },
    };
    return axios(options);
  },

  getReviewsMetadata: (product_id = 40346) => {
    const options = {
      url: 'api/reviews/meta',
      method: 'get',
      params: {
        product_id,
      },
    };
    return axios(options);
  },

  addReview: (
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
      url: 'api/reviews',
      method: 'post',
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
  },

  markReviewAsHelpful: (review_id) => {
    const options = {
      url: `api/reviews/${review_id}/helpful`,
      method: 'put',
    };
    return axios(options);
  },

  reportReview: (review_id) => {
    const options = {
      url: `api/reviews/${review_id}/report`,
      method: 'put',
    };
    return axios(options);
  },
};
