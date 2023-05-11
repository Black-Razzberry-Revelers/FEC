import React, { useState } from 'react';

function Answer({ answer, v, c, qid, aid}) {
  const { markAHelpful, reportAnswer } = c;
  function onHelpful() {
    markAHelpful(qid, aid);
  }
  function onReport() {
    reportAnswer(qid, aid);
  }
  function onImage() {}

  return (
    <>
      <p> Answer: {answer.body}</p>
      <p> by: {answer.answerer_name}</p>
      <p> on: {answer.date}</p>
      <p> Helpful? {!answer.markedHelpful?<strong onClick={onHelpful}>Yes</strong>:<strong>Marked Helpful</strong>} ({answer.helpfulness}) | {!answer.reported?<strong onClick={onReport}>Report</strong>:<strong>Reported</strong>}</p>
    </>
  );
}

export default Answer;
