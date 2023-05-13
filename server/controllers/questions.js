const models = require('../models');

const { questions } = models;

// if the response has length less than 10-
// return the response
// else asynch call

function recursiveGet(id, page = 1, results = []) {
  return questions.getQuestions(id, page, 10).then((pageOfResults) => {
    if (pageOfResults.data.results.length !== 10) {
      results.push(...pageOfResults.data.results);
      return results;
    }
    return recursiveGet(id, page + 1, results.push(...pageOfResults.data.results));
  });
}

exports.getQuestions = (req, res) => {
  recursiveGet(req.query.product_id).then((results) => {
    res.status(200);
    res.send(results);
  });
};

exports.postQuestion = (req, res) => {
  const {product_id, body, name, email} = req.body;
  questions.postNewQuestion(product_id, body, name, email).then(() => {
  res.status(200);
  res.send("Question Posted")
  })
};


exports.postAnswer = (req, res) => {
  const {product_id, body, name, email, question_id} = req.body;
  questions.postNewAnswer(product_id, body, name, email, question_id).then(() => {
  res.status(200);
  res.send("Answer Posted");
  })
};


exports.putQuestionAsHelpful = (req, res) => {
  const {question_id} = req.query;
  questions.putQuestionAsHelpful(question_id).then(() => {
  res.status(200);
  res.send("Question Helpful");
})
};

exports.putAnswerAsHelpful = (req, res) => {
  const {answer_id} = req.query;
  questions.putAnswerAsHelpful(answer_id).then(() => {
  res.status(200);
  res.send("Answer Helpful");
})
};

exports.putAnswerAsReported = (req, res) => {
  const {answer_id} = req.query;
  questions.putAnswerAsReported(answer_id).then(() => {
  res.status(200);
  res.send("Answer Reported");
};


// exports.putAnswerAsReported = (answer_id) => {
//   const request = {
//     url: `${process.env.URL}/qa/answers/${answer_id}/report`,
//     method: 'PUT',
//     params: {
//       answer_id,
//     },
//     headers: {
//       Authorization: `${process.env.TOKEN}`,
//     },
//   };
//   return axios(request);
// };
