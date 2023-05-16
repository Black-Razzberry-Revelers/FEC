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
    <>
      <p className="sub-head">
        {' '}
        Answer:
        {' '}
        {answer.body}
      </p>
      <p className='label'>
        {' '}
        by:
        {' '}
        {answer.answerer_name}
      </p>
      <p className='label'>
        {' '}
        on:
        {' '}
        {answer.date}
      </p>
      <p className="info-text">
        {' '}
        Helpful?
        {' '}
        {!answer.markedHelpful ? <strong onClick={onHelpful} className="helpful-button">Yes</strong> : <strong>Marked Helpful</strong>}
        {' '}
        (
        {answer.helpfulness}
        ) |
        {' '}
        {!answer.reported ? <strong onClick={onReport} className="helpful-button">Report</strong> : <strong>Reported</strong>}
      </p>
    </>
  );
}

export default Answer;
