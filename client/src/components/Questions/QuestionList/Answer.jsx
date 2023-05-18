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
      <p>
        {' '}
        on:
        {' '}
        {answer.date}
      </p>
      <p>
        {' '}
        Helpful?
        {' '}
        {!answer.markedHelpful ? <strong onClick={onHelpful}>Yes</strong> : <strong>Marked Helpful</strong>}
        {' '}
        (
        {answer.helpfulness}
        ) |
        {' '}
        {!answer.reported ? <strong onClick={onReport}>Report</strong> : <strong>Reported</strong>}
      </p>
    </>
  );
}

export default Answer;
