import React, { useState } from 'react';
import AnswerList from './AnswerList.jsx';

function Question({ question, changeMode }) {
  const [helpful, setHelpful] = useState(false);
  const [reported, setReported] = useState(false);
  const [answersCollapsed, setAnswersCollapsed] = useState(true);

  function onHelpful() {}
  function onReport() {}
  function onMore() {}
  function onLess() {}
  function onAddAnswer() {}

  return (
  <>
    <AnswerList answers={[{}]} collapsed={answersCollapsed} changeMode={changeMode}/>
  </>
  );
}

export default Question;
