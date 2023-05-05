import react from 'react';
import Answer from './Answer.jsx'

function AnswerList({answers, answersCollapsed, changeMode}){

  function onScroll() {}

  return (
  <>
    <Answer changeMode={changeMode} answer={{}}/>
  </>
  )
}

export default AnswerList