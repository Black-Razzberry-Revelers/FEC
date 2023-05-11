/* eslint-disable import/prefer-default-export */
import axios from 'axios';

export const requests = {
  get: {
    product: function info(id = 40347) {
      return axios.get(
        'http://localhost:3000/api/products/:product_id',
        { params: { product_id: id } },
      );
    },
  },

};
