/* eslint-disable import/prefer-default-export */
import axios from 'axios';

export const requests = {
  get: {
    product: (id = 40347) => axios.get(
<<<<<<< HEAD
      'http://localhost:3000/api/products/:product_id',
      { params: { product_id: id } },
    ),
=======
      `http://localhost:3000/api/products/${id}`,
      // 'http://localhost:3000/api/products/:product_id',
      // { params: { product_id: id } },
    )
    ,
>>>>>>> main
    meta: (id = 40347) => axios.get(
      'http://localhost:3000/api/reviews/meta',
      { params: { product_id: id } },
    ),
  },

};
