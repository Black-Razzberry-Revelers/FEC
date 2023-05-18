import React, { useEffect, useState } from 'react';
import Answer from './Answer';

function AnswerList({
  qid, v, c, answers, tog,
}) {
  let shown;
  const { showMore } = v.questions.find((q) => q.question_id === qid);
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
  const question = v.questions.find((x) => x.question_id === qid);
  return (
    <div id="AnswerViewport" style={style}>
      {shown.map((a) => (<Answer answer={a} key={a.id} v={v} c={c} qid={qid} aid={a.id} />))}
      {answers.length > 2
      && (
      <div onClick={tog} className="show-button show-more">
        {question.showMore ? 'Show Less Answers' : 'Show More Answers'}
      </div>
      )}
    </div>
  );
}

export default AnswerList;
