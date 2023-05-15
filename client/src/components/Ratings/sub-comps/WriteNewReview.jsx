/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/react-in-jsx-scope */
import Reat, { useState } from 'react';
import OverallRating from './sub-write-review/OverallRating';
import Characteristics from './sub-write-review/Characteristics';

function WriteNewReview({ setWriteReview, metaData }) {
  const [star, setStar] = useState(0);
  const [recommendation, setRecommendation] = useState(true);
  return (
    <div className="write-new-review">
      <span
        className="material-symbols-outlined"
        onClick={() => setWriteReview(false)}
      >
        cancel
      </span>

      <h1>Write Your Review</h1>
      <h2>About the Product Name Here</h2>
      <OverallRating star={star} setStar={setStar} />
      <p>Do you recommend this product?</p>

      <label htmlFor="yes">Yes</label>
      <input type="radio" id="yes" name="recommendation" onClick={(e) => setRecommendation(true)} />

      <label htmlFor="no">No</label>
      <input type="radio" id="no" name="recommendation" value="" onClick={(e) => setRecommendation(false)} />

      {metaData && <Characteristics metaData={metaData} />}

      <label htmlFor="summary">Summary:</label>
      <input name="summary" type="text" placeholder="Example: Best purchase ever!" minLength="3" maxLength="60" required />
      {/* make a counter to count how many char has been writen */}
    </div>
  );
}

export default WriteNewReview;
