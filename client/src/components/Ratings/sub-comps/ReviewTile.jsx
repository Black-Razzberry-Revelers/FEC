/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/prop-types */
import { useState } from 'react';
import fetcher from '../../fetcher';

function ReviewTile({ review }) {
  const style = {
    width: '5rem',
    borderRadius: '5rem',
    height: '5rem',
  };
  const [feedback, setFeedback] = useState(true);

  const sendPositiveFeedback = () => {
    if (feedback) {
      setFeedback(false);
      fetcher.markReviewAsHelpful(review.review_id);
    }
  };

  const sendNegativeFeedback = () => {
    if (feedback) {
      setFeedback(false);
      fetcher.reportReview(review.review_id);
    }
  };

  return (
    <div>
      <p>*****</p>
      <p>{review.reviewer_name}</p>
      <p>{review.date}</p>
      <p style={{ fontWeight: 'bold' }}>{review.summary}</p>
      <p>{review.body}</p>
      {review.photos.map((photo) => (
        <img src={photo.url} alt="img" style={style} />
      ))}
      {review.response && (
        <>
          <p>Response from seller</p>
          <p>{reiew.response}</p>
        </>
      )}
      <p>{review.response && reiew.response}</p>
      <p>{review.recommend && 'I recommend this product'}</p>
      <p>
        Was this review helpful?
        <a onClick={(e) => sendPositiveFeedback()}>
          Yes (
          {review.helpfulness}
          )
        </a>
        <a onClick={(e) => sendNegativeFeedback()}>No (0)</a>
      </p>
    </div>
  );
}

export default ReviewTile;
