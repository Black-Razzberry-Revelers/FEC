import React, { useState, useEffect } from 'react';
import QuestionList from './QuestionList/QuestionList.jsx';
import NavigationButtons from './Navigation/NavigationButtons.jsx';
import SearchBar from './Navigation/SearchBar.jsx';
import AddAnswerModal from './Modals/AddAnswerModal.jsx';
import AddQuestionModal from './Modals/AddQuestionModal.jsx';
import ImageModal from './Modals/ImageModal.jsx';

function Questions() {
  const [mode, setMode] = useState('');
  const [modeProps, setModeProps] = useState({});
  const [questions, setQuestions] = useState([{}]);
  const [displayedQuestions, setDisplayedQuestions] = useState([{}]);
  const [questionsCollapsed, setQuestionsCollapsed] = useState(true);

  function changeMode() {}
  function collapseQuestions() {}
  function changeDisplay() {}
  function getQuestions() {}

  useEffect(() => {
    getQuestions();
  }, []);

  return (
    <>
      <SearchBar changeDisplay={changeDisplay}/>
      <QuestionList questions={displayedQuestions} changeMode={changeMode} collapsed={questionsCollapsed} changeDisplay={changeDisplay}/>
      <NavigationButtons changeMode={changeMode} collapse={collapseQuestions} collapsed={questionsCollapsed}/>

      <AddAnswerModal props={modeProps} changeMode={changeMode}/>
      <AddQuestionModal props={modeProps} changeMode={changeMode}/>
      <ImageModal props={modeProps} changeMode={changeMode}/>
    </>
  );
}

export default Questions;
