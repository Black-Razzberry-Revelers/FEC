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

  get: {
    product: (id = 40346) => axios.get(
      `api/products/${id}`,
    ),
    meta: (id = 40346) => axios.get(
      'api/reviews/meta',
      { params: { product_id: id } },
    ),
    questions: (id) => axios.get(
      'api/questions',
      { params: { product_id: id } },
    ),
    related: (id = 40346) => axios.get(
      `api/products/${id}/related`,
    ),
  },

  post: {
    question: (product_id, body, name, email) => axios.post(
      'api/questions/question',
      {
        product_id, body, name, email,
      },
    ),
    answer: (product_id, question_id, body, name, email) => axios.post(
      'api/questions/answer',
      {
        question_id, product_id, body, name, email,
      },
    ),
  },

  put: {
    helpfulAnswer: (answer_id) => axios.put(
      'api/questions/answer/helpful',
      { params: { answer_id } },
    ),
    helpfulQuestion: (question_id) => axios.put(
      'api/questions/question/helpful',
      { params: { question_id } },
    ),
    reportAnswer: (answer_id) => axios.put(
      'api/questions/answer/report',
      { params: { answer_id } },
    ),
  },
};
