import React, { useEffect, useState } from 'react';
import Answer from './Answer.jsx';

function AnswerList({ qid, v, c, answers}) {
  let shown;
  const { showMore } = v.questions.find((q) => q.question_id === qid);
  console.log(qid)
  console.log(v.questions.find((q) => q.question_id === qid))
  if (!showMore || showMore === undefined) {
    shown = answers.slice(0, 2);
  } else {
    shown = answers;
  }
  const style = {
    width: '90vh',
    maxHeight: '50vh',
    overflow: 'auto',
  };
  return (
    <div id="AnswerViewport" style={style}>
      {shown.map((a) => (<Answer answer={a} key={a.id} v={v} c={c} qid={qid} aid={a.id} />))}
    </div>
  );
}

export default AnswerList;
