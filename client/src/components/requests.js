/* eslint-disable import/prefer-default-export */
import axios from 'axios';

export const requests = {
  get: {
    product: (id = 40347) => axios.get(
      `http://localhost:3000/api/products/${id}`,
      // 'http://localhost:3000/api/products/:product_id',
      // { params: { product_id: id } },
    ),
    meta: (id = 40347) => axios.get(
      'http://localhost:3000/api/reviews/meta',
      { params: { product_id: id } },
    ),
    questions: (id) => axios.get(
      'http://localhost:3000/api/questions',
      { params: { product_id: id } },
    ),
  },
  post: {
    question: (product_id, body, name, email) => axios.post(
      'http://localhost:3000/api/questions/question',
      { data: { product_id, body, name, email } },
    ),
    answer: (product_id, question_id, body, name, email) => axios.post(
      'http://localhost:3000/api/questions/answer',
      { data: { question__id, product_id, body, name, email } }
    ),
  },
  put: {
    helpfulAnswer: (answer_id) => axios.put(
      `http://localhost:3000/api/questions/${answer_id}/helpful`,
      { params: { answer_id } },
    ),
    helpfulQuestion: (question_id) => axios.put(
      `http://localhost:3000/api/questions/${question_id}/helpful`,
      { params: { question_id } },
    ),
    reportAnswer: (answer_id) => axios.put(
      `http://localhost:3000/api/questions/${answer_id}/report`,
      { params: { answer_id } },
    ),
  },
};
