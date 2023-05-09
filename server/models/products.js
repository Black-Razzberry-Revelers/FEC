const axios = require('axios');

exports.getRelatedProducts = (productId) => {
  const options = {
    url: `${process.env.URL}/products/${productId}/related`,
    method: 'get',
    headers: {
      Authorization: `${process.env.TOKEN}`,
    },
  };
  return axios(options);
};

exports.getRelatedProductInfo = (relatedProductIds, endpoint = '') => {
  const apiCalls = relatedProductIds.map((productId) => {
    const options = {
      url: `${process.env.URL}/products/${productId}${endpoint}`,
      method: 'get',
      headers: {
        Authorization: `${process.env.TOKEN}`,
      },
    };
    return axios(options);
  });
  return Promise.all(apiCalls);
};
