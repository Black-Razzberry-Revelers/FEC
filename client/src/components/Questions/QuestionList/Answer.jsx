import React, { useState } from 'react';

function Answer({ answer, changeMode }) {
  const [helpful, setHelpful] = useState(false);
  const [reported, setReported] = useState(false);

  function onHelpful() {}
  function onReport() {}
  function onImage() {}

  return (<>
  <p> Answer: {answer.body}</p>
  <p> by: {answer.answerer_name}</p>
  <p> on: {answer.date}</p>
  <p>Helpful? <strong>Yes</strong>({answer.helpfulness}) | <strong>Report</strong></p>
  </>);
}

export default Answer;
