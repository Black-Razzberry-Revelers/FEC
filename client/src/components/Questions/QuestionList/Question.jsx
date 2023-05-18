import React, { useState, useEffect } from 'react';
import AnswerList from './AnswerList';

function Question({
  question, qid, v, c,
}) {
  const { showAnswers, changeMode, markQHelpful } = c;

  function onHelpful() {
    markQHelpful(qid);
  }

  function onToggle() {
    showAnswers(qid);
  }
  function onAddAnswer() {
    changeMode('Add Answer', { question, qid });
  }

  let answers = Object.keys(question.answers).map((key) => question.answers[key]);

  answers = answers.sort((a, b) => {
    if (a.helpfulness < b.helpfulness) {
      return 1;
    }
    if (a.helpfulness > b.helpfulness) {
      return -1;
    }
    return 0;
  });

  return (
    <>
      <div className="question-body big-Q">
        <h1 className="big-letter">Q</h1>
        <h4 className="sub-head question-text">
          {question.question_body}
        </h4>
        <p className="label question-info">
          Asked By:
          {question.asker_name}
          On:
          {' '}
          {question.question_date}
        </p>
        <p className="label question-helpful">
          {' '}
          Helpful?
          {' '}
          {question.markedHelpful ? <strong className="helpful-button">Marked Helpful!</strong> : <strong onClick={onHelpful} className="helpful-button"> Yes! </strong>}
          {' '}
          (
          {question.question_helpfulness}
          )
        </p>
        <div className="add-answer"><strong onClick={onAddAnswer} className="helpful-button">Add Answer</strong></div>
      </div>
      <AnswerList c={c} v={v} qid={qid} answers={answers} tog={onToggle} />
    </>
  );
}

export default Question;
