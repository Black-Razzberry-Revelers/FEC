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

exports.getAnswers = (req, res) => {

};

exports.postQuestion = (req, res) => {

};

exports.postAnswer = (req, res) => {

};

exports.putQuestionAsHelpful = (req, res) => {

};

exports.putAnswerAsHelpful = (req, res) => {

};

exports.putAnswerAsReported = (req, res) => {

};
