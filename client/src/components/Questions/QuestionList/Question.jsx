import React, { useState, useEffect } from 'react';
import AnswerList from './AnswerList';

function Question({ question, qid, v, c }) {
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
  <div>
    <h4 className="sub-head">Question: {question.question_body}</h4>
    <p className="label">Asked By:{question.asker_name}</p>
    <p className="label">On: {question.question_date}</p>
    <p className="label"> Helpful? {question.markedHelpful ? <strong className="helpful-button">Marked Helpful!</strong> : <strong onClick={onHelpful} className="helpful-button"> Yes! </strong>} ({question.question_helpfulness})  |  <strong onClick={onAddAnswer} className="helpful-button">Add Answer</strong></p>
    <AnswerList c={c} v={v} qid={qid} answers={answers} />
    {answers.length > 2 && <button onClick={onToggle} className="show-button"> {question.showMore ? 'Show Less Answers' : 'Show More Answers'} </button>}
  </div>
  );
}

export default Question;
