/* eslint-disable react/no-array-index-key */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import ReviewTile from './ReviewTile';

function ReviewsList({ reviews }) {
  const [scrollTop, setScrollTop] = useState(0);

  const style = {
    border: '1px solid black',
    width: '600px',
    height: '500px',
    overflow: 'auto',
  };
  const handleScroll = (event) => {
    setScrollTop(event.currentTarget.scrollTop);
  };

  return (
    <div style={style} onScroll={handleScroll}>
      {reviews.map((review, i) => (
        <ReviewTile key={i} review={review} />
      ))}
    </div>
  );
}

export default ReviewsList;
