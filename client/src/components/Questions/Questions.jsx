import React, { useState, useEffect } from 'react';
import axios from 'axios';
import QuestionList from './QuestionList/QuestionList.jsx';
import NavigationButtons from './Navigation/NavigationButtons.jsx';
import SearchBar from './Navigation/SearchBar.jsx';
import AddAnswerModal from './Modals/AddAnswerModal.jsx';
import AddQuestionModal from './Modals/AddQuestionModal.jsx';
import ImageModal from './Modals/ImageModal.jsx';

function Questions() {
  const [mode, setMode] = useState('');
  const [modeProps, setModeProps] = useState({});
  const [questions, setQuestions] = useState([]);
  const [displayedQuestions, setDisplayedQuestions] = useState([]);
  const [questionsCollapsed, setQuestionsCollapsed] = useState(true);

  function changeMode(aMode, someModeProps) {
    setMode(aMode);
    setModeProps(someModeProps);
  }
  function toggleQuestions() {
    setQuestionsCollapsed(!questionsCollapsed);
  }
  function changeDisplay() {}
  function getQuestions(id) {
    return axios({
      url: 'http://localhost:3000/api/questions',
      method: 'GET',
      params: { product_id: id },
    });
  }

  useEffect(() => {
    getQuestions(40347, 'true').then((response) => {
      console.log(response.data);
      setQuestions(response.data);
      setDisplayedQuestions(response.data.slice(0, 2));
    });
  }, []);

  // we'll change this later but it's just for convenience
  useEffect(() => {
  questionsCollapsed ? setDisplayedQuestions(questions.slice(0,2)) : setDisplayedQuestions(questions);
  }, [questionsCollapsed]);
  return (
    <>
      <SearchBar changeDisplay={changeDisplay}/>
      <QuestionList questions={displayedQuestions} changeMode={changeMode} collapsed={questionsCollapsed} changeDisplay={changeDisplay}/>
      <NavigationButtons changeMode={changeMode} toggle={toggleQuestions} collapsed={questionsCollapsed} />

      {mode === 'Add Answer' && <AddAnswerModal props={modeProps} changeMode={changeMode}/>}
      {mode === 'Add Question' && <AddQuestionModal props={modeProps} changeMode={changeMode}/>}
      {mode === 'Image' && <ImageModal props={modeProps} changeMode={changeMode}/>}
    </>
  );
}

export default Questions;
