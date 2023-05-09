import React, { useState, useEffect } from 'react';
import AnswerList from './AnswerList.jsx';

function Question({ question, changeMode }) {
  const [helpful, setHelpful] = useState(false);
  const [reported, setReported] = useState(false);
  const [answersCollapsed, setAnswersCollapsed] = useState(true);
  function onHelpful() {}
  function onReport() {}
  function onToggle() {
    setAnswersCollapsed(!answersCollapsed);
  }
  function onAddAnswer() {
    changeMode('Add Answer', { question });
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
    <h4>Question: {question.question_body}</h4>
    <p>Asked By:{question.asker_name}</p>
    <p>On: {question.question_date}</p>
    <p>Helpful? <strong>Yes!</strong> ({question.question_helpfulness})  |  <strong onClick={onAddAnswer}>Add Answer</strong></p>
    <AnswerList answers={answers} collapsed={answersCollapsed} changeMode={changeMode} />
    {answers.length > 2 && <button onClick={onToggle}> {answersCollapsed ? 'Show More Answers' : 'Show Less Answers'} </button>}
  </>
  );
}

export default Question;
