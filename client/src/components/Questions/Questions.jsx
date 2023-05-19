import React, { useState, useEffect } from 'react';
import axios from 'axios';
import QuestionList from './QuestionList/QuestionList';
import NavigationButtons from './Navigation/NavigationButtons';
import SearchBar from './Navigation/SearchBar';
import AddAnswerModal from './Modals/AddAnswerModal';
import AddQuestionModal from './Modals/AddQuestionModal';
import ImageModal from './Modals/ImageModal';
import { requests } from '../requests';

function Questions({ product_id }) {
  const [model, setModel] = useState({});
  const [view, setView] = useState({
    questions: [],
    empty: true,
    expanded: false,
    mode: '',
    modeProps: {},
    pid: product_id || 40346,

  });

  useEffect(() => {
    requests.get.questions(40342).then((response) => {
      setModel({
        questions: response.data,
      });

      setView({
        questions: response.data.slice(0, 2),
        empty: response.data.length === 0,
        expanded: false,
        mode: '',
        modeProps: {},
        pid: product_id || 40346,
      });
    });
  }, []);

  useEffect(() => {
    if (Array.isArray(model.questions)) {
      setView({ ...view, questions: model.questions.map((x) => x) });
    }
  }, [model]);

  function toggleExpanded() {
    const tog = !view.expanded;
    setView({ ...view, expanded: tog });
  }

  function showAnswers(id) {
    const copy = model.questions.map((q) => {
      if (q.question_id === id) {
        const show = { ...q };
        show.showMore = !show.showMore;
        return show;
      }
      return q;
    });
    setModel({ questions: copy });
  }

  function changeMode(mode, modeProps) {
    setView({ ...view, mode, modeProps });
  }

  function textSearch(str) {
    if (str.length >= 3) {
      const filtered = model.questions.filter((q) => {
        if (q.question_body.includes(str)) {
          return true;
        }
        return false;
      });
      setView({...view, questions: filtered });
    } else {
      setView({...view, questions: model.questions.map((x) => x) });
    }
  }

  function markQHelpful(id) {
    requests.put.helpfulQuestion(id).then(() => {
      const copy = model.questions.map((q) => {
        if (q.question_id === id) {
          const mark = { ...q };
          mark.markedHelpful = true;
          mark.question_helpfulness += 1;
          return mark;
        }
        return q;
      });
      setModel({ questions: copy });
    });
  }

  function markAHelpful(qid, aid) {
    requests.put.helpfulAnswer(aid).then(()=>{
      const copy = model.questions.map((q) => {
        if (q.question_id === qid) {
          const mark = { ...q };
          mark.answers[aid].markedHelpful = true;
          mark.answers[aid].helpfulness += 1;
          return mark;
        }
        return q;
      });
      setModel({ questions: copy });
    });
  }

  function reportAnswer(qid, aid) {
    requests.put.reportAnswer(aid).then(() => {
      const copy = model.questions.map((q) => {
        if (q.question_id === qid) {
          const mark = { ...q };
          mark.answers[aid].reported = true;
          return mark;
        }
        return q;
      });
      setModel({ questions: copy });
    });
  }

  const controller = {
    reportAnswer, markAHelpful, markQHelpful, changeMode, showAnswers, toggleExpanded, textSearch,
  };

  return (
    <div data-testid="Questions" id="Q-A">
      <SearchBar c={controller} v={view} data-testid="SearchBar" />
      <QuestionList v={view} c={controller} data-testid="QuestionList" />
      <NavigationButtons v={view} c={controller} data-testid="NavigationButtons" />

      {view.mode === 'Add Answer' && <AddAnswerModal v={view} c={controller} data-testid="AddAnswer" />}
      {view.mode === 'Add Question' && <AddQuestionModal v={view} c={controller} data-testid="AddQuestion" />}
    </div>
  );
}
//
export default Questions;
