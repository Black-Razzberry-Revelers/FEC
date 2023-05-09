import React from 'react';
import Question from './Question.jsx';

function QuestionList({questions, changeMode, collapsed, changeDisplay}) {
  function onScroll() {}

  const sortedQuestions = questions.sort((a, b) => {
    if (a.question_helpfulness < b.question_helpfulness) {
      return 1;
    }
    if (a.question_helpfulness > b.question_helpfulness) {
      return -1;
    }
    return 0;
  });

  return (
  <>
    {sortedQuestions.map((question) => (<Question question={question} changeMode={changeMode} />))}
  </>
  );
}

export default QuestionList;
