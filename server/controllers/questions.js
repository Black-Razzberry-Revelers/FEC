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
  console.log(">>>>Post Question Reached")
  const { product_id, body, name, email } = req.body;
   questions.postNewQuestion(product_id, body, name, email).then(() => {
     res.status(204);
     res.send('Question Posted');
   });
};///

exports.postAnswer = (req, res) => {
  console.log(">>>>Post Answer Reached")
  const { product_id, body, name, email, question_id } = req.body;
    questions.postNewAnswer(question_id, product_id, body, name, email).then(() => {
      res.status(204);
      res.send('Answer Posted');
    })
};

exports.putQuestionAsHelpful = (req, res) => {
  const { question_id } = req.body.params;
  questions.putQuestionAsHelpful(question_id).then(function (response) {
    console.log(response.data);
    console.log(response.status);
    console.log(response.statusText);
    console.log(response.headers);
    console.log(response.config);
  }).then(() => {
    res.status(204);
    res.send('Question Helpful');
  });
};
//
exports.putAnswerAsHelpful = (req, res) => {
  const { answer_id } = req.body.params;
  questions.putAnswerAsHelpful(answer_id).then(function (response) {
    console.log(response.data);
    console.log(response.status);
    console.log(response.statusText);
    console.log(response.headers);
    console.log(response.config);
  }).then(() => {
      res.status(204);
      res.send('Answer Helpful');
    });
};

exports.putAnswerAsReported = (req, res) => {
  const { answer_id } = req.body.params;
  questions.putAnswerAsReported(answer_id).then(function (response) {
    console.log(response.data);
    console.log(response.status);
    console.log(response.statusText);
    console.log(response.headers);
    console.log(response.config);
  }).then(() => {
    res.status(204);
    res.send('Answer Reported');
  });
};
