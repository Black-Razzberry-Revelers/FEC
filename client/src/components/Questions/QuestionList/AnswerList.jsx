import React, { useEffect, useState } from 'react';
import Answer from './Answer.jsx';

function AnswerList({ qid, v, c, answers}) {
  function onScroll() {}
  let shown;
  const { showMore } = v.questions.find((q) => q.question_id === qid);
  console.log(qid)
  console.log(v.questions.find((q) => q.question_id === qid))
  if (!showMore || showMore === undefined) {
    shown = answers.slice(0, 2);
  } else {
    shown = answers;
  }

  return (
    <>
      {shown.map((a) => (<Answer answer={a} key={a.id} v={v} c={c} qid={qid} aid={a.id} />))}
    </>
  );
}

export default AnswerList;
