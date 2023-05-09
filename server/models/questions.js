const axios = require('axios');

exports.getQuestions = (id, page = 1, count = 5) => {
  const request = {
    url: `${process.env.URL}/qa/questions`,
    method: 'GET',
    params: {
      product_id: id,
      page,
      count,
    },
    headers: {
      Authorization: `${process.env.TOKEN}`,
    },
  };
  return axios(request);
};

exports.postNewQuestion = () => {};
exports.postNewAnswer = () => {};
exports.putQuestionAsHelpful = () => {};
exports.putAnswerAsHelpful = () => {};
exports.putAnswerAsReported = () => {};
