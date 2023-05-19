import React, { useState } from 'react';
import { intlFormat } from 'date-fns';

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
  function imgClicker(photo) {
    return () => {
      console.log("Photo UTL",photo)
      c.changeMode('Image', { imgURL: photo });
    };
  }
  return (
    <div className="answer-body">
      <h3 className="big-letter big-A">
        A:
      </h3>
      <p className="sub-head answer-text">
        {answer.body}
      </p>
      <p className="label answer-info">
        {' '}
        by:
        {' '}
        {answer.answerer_name === 'seller' || answer.answerer_name === 'Seller' ? (
          <strong>
            {answer.answerer_name}
            {' '}
          </strong>
        ) : answer.answerer_name}
        {' '}
        on:
        {' '}
        {intlFormat(new Date(answer.date), {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        })}
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
      {/* /* <div className="answer-images">
        {answer.photos.map((photo) => (
          <img
            className="thumbnail img-thumbnail"
            style={{ padding: 'unset', borderRadius: '8px', borderWidth: '.25px' }}
            alt="circle"
            src={photo}
            onClick={imgClicker(photo)}
          />
        ))}
      </div> */ }
      <p className="answer-report">
        {' '}
        {!answer.reported ? <strong onClick={onReport} className="helpful-button">Report</strong> : <strong>Reported</strong>}
      </p>
    </div>
  );
}

export default Answer;
