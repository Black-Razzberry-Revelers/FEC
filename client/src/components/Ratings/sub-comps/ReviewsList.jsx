/* eslint-disable react/no-array-index-key */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import ReviewTile from './ReviewTile';

function ReviewsList({ reviews, filters, moreReviews }) {
  const [scrollTop, setScrollTop] = useState(0);
  const [filteredReviews, setFilteredReviews] = useState(reviews);

  const style = {
    width: '100%',
    height: '45rem',
    overflow: 'auto',
  };
  const handleScroll = (event) => {
    setScrollTop(event.currentTarget.scrollTop);
  };

  const applyFilters = () => {
    if (filters.length === 0) {
      setFilteredReviews(reviews);
      return;
    }
    const filtered = reviews.filter((review) => filters.includes(review.rating));
    setFilteredReviews(filtered);
  };

  useEffect(() => {
    applyFilters();
  }, [filters, moreReviews]);

  useEffect(() => {
    if (moreReviews) {
      setFilteredReviews(reviews);
    } else {
      setFilteredReviews(reviews.slice(0, 2));
    }
  }, [reviews, moreReviews]);

  return (
    <div style={style} onScroll={handleScroll}>
      {filteredReviews.map((review, i) => (
        <ReviewTile key={`${i}review`} review={review} />
      ))}
    </div>
  );
}

export default ReviewsList;
