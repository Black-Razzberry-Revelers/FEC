const express = require('express');
const controllers = require('./controllers');

const router = express.Router();
// Overview

// Products

// Reviews
router.get('/reviews', controllers.reviews.getListReviews);
router.get('/reviews/meta', controllers.reviews.getReviewsMetadata);
router.post('/reviews', controllers.reviews.postReview);
router.put('/reviews/:review_id/helpful', controllers.reviews.putReviewAsHelpful);
router.put('/reviews/:review_id/report', controllers.reviews.putReportReview);

// Questions and Answers
router.get('/questions', controllers.questions.getQuestions);
router.get('/questions/answers', controllers.questions.getAnswers);
router.post('/questions/question', controllers.questions.postQuestion);
router.post('/questions/answer', controllers.questions.postAnswer);
router.put('/questions/question/:question_id/helpful', controllers.questions.putQuestionAsHelpful);
router.put('/questions/answer/:answer_id/helpful', controllers.questions.putAnswerAsHelpful);
router.put('/question/answer/:answer_id/report', controllers.questions.putAnswerAsReported);

// Cart

// Ineractions

module.exports = router;
