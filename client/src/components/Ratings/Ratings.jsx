/* eslint-disable react/react-in-jsx-scope */
import { useState, useEffect } from 'react';
import axios from 'axios';
import fetcher from '../fetcher';
import ReviewsList from './sub-comps/ReviewsList';

function Ratings(/* {product_id, count} */) {
  const [reviews, setReviews] = useState();
  useEffect(() => {
    fetcher.getListReviews(1, 5, 'relevent', 40344)

      .then((result) => setReviews(result.data.results))
      .catch((err) => console.log('RATINGS GET LIST REVIEWS ERR', err));
  }, []);
  return (
    <>
      <h2>Ratings & Reviews</h2>
      <div>
        {reviews && <ReviewsList reviews={reviews} />}
      </div>
    </>
  );
}

export default Ratings;
