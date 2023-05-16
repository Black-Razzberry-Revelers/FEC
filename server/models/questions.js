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

exports.postNewQuestion = (product_id, body, name, email) => {
  const request = {
    url: `${process.env.URL}/qa/questions`,
    method: 'POST',
    data: {
      product_id,
      body,
      name,
      email,
    },
    headers: {
      Authorization: `${process.env.TOKEN}`,
    },
  };
  return axios(request);
};
exports.postNewAnswer = (question_id, product_id, body, name, email, photos = []) => {
  const request = {
    url: `${process.env.URL}/qa/questions/${question_id}/answers`,
    method: 'POST',
    params: {
      question_id,
    },
    headers: {
      Authorization: `${process.env.TOKEN}`,
    },
    data: {
      body,
      name,
      email,
      photos,
    }
  };
  return axios(request);
};
exports.putQuestionAsHelpful = (question_id) => {
  const request = {
    url: `${process.env.URL}/qa/questions/${question_id}/helpful`,
    method: 'PUT',
    params: {
      question_id,
    },
    headers: {
      Authorization: `${process.env.TOKEN}`,
    },
  };
  return axios(request);
};
exports.putAnswerAsHelpful = (answer_id) => {
  const request = {
    url: `${process.env.URL}/qa/answers/${answer_id}/helpful `,
    method: 'PUT',
    params: {
      answer_id,
    },
    headers: {
      Authorization: `${process.env.TOKEN}`,
    },
  };
  return axios(request);
};

exports.putAnswerAsReported = (answer_id) => {
  const request = {
    url: `${process.env.URL}/qa/answers/${answer_id}/report`,
    method: 'PUT',
    params: {
      answer_id,
    },
    headers: {
      Authorization: `${process.env.TOKEN}`,
    },
  };
  return axios(request);
};
