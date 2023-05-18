import React, { useState } from 'react';

function Answer({
  answer, v, c, qid, aid,
}) {
  const { markAHelpful, reportAnswer } = c;
  function onHelpful() {
    markAHelpful(qid, aid);
  }
  function onReport() {
    reportAnswer(qid, aid);
  }

  return (
    <div className="answer-body">
      <h3 className="big-letter big-A">
        A:
      </h3>
      <p className="sub-head answer-text">
        {answer.body}
      </p>
      <p className='label answer-info'>
        {' '}
        by:
        {' '}
        {answer.answerer_name}
        {' '}
        on:
        {' '}
        {answer.date}
      </p>
      <p className="info-text answer-helpful">
        {' '}
        Helpful?
        {' '}
        {!answer.markedHelpful ? <strong onClick={onHelpful} className="helpful-button">Yes</strong> : <strong>Marked Helpful</strong>}
        {' '}
        (
        {answer.helpfulness}
        ) |
        {' '}
      </p>
      <p className="answer-report"> {!answer.reported ? <strong onClick={onReport} className="helpful-button">Report</strong> : <strong>Reported</strong>}</p>
    </div>
  );
}

export default Answer;
