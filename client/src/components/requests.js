/* eslint-disable import/prefer-default-export */
import axios from 'axios';

export const requests = {
  get: {
    product: (id = 40347) => axios.get(
      `http://localhost:3000/api/products/${id}`,
    ),
    meta: (id = 40347) => axios.get(
      'http://localhost:3000/api/reviews/meta',
      { params: { product_id: id } },
    ),
    related: (id = 40347) => axios.get(
      `http://localhost:3000/api/products/${id}/related`,
    ),
  },
};
