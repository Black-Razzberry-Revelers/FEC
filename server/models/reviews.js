
const axios = require('axios');

exports.listReviews = (page = 1, count = 5, sort = "newest", product_id = 40344) => {
  const options = {
    method: 'get',
    url: `${process.env.URL}/reviews`,
    headers : {
      Authorization : `${process.env.TOKEN}`
    },
    params: { page, count, sort, product_id },
  };
  return axios(options);
}