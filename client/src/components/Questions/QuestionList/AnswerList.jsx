import React, { useEffect, useState } from 'react';
import Answer from './Answer.jsx';

function AnswerList({ answers, collapsed, changeMode }) {
  function onScroll() {}

  const displayedAnswers = collapsed ? answers.slice(0, 2) : answers;

  return (
    <>
      {displayedAnswers.map((answer) => (<Answer changeMode={changeMode} answer={answer} key={answer.id} />))}
    </>
  );
}

export default AnswerList;
