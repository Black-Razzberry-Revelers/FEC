/* eslint-disable react/react-in-jsx-scope */
import { useState, useEffect } from 'react';
import axios from 'axios';
import fetcher from '../fetcher';
import ReviewsList from './sub-comps/ReviewsList';

function Ratings(/* {product_id, count} */) {
  const [reviews, setReviews] = useState();
  const [more, setMore] = useState(false);
  const [sort, setSort] = useState('relevant');
  useEffect(() => {
    fetcher
      .getListReviews(1, 1000, sort, 40346)

      .then((result) => {
        console.log('????', result.data.results.length);
        setReviews(result.data.results);
      })
      .catch((err) => console.log('RATINGS GET LIST REVIEWS ERR', err));
  }, [sort]);
  return (
    <>
      <h2>Ratings & Reviews</h2>
      <h3>{reviews && `${reviews.length} Reviews, sorted by`}</h3>
      <select onChange={(e) => setSort(e.target.value)}>
        <option value="relevant">Relevant</option>
        <option value="helpful">Helpful</option>
        <option value="newest">Newest</option>
      </select>
      <div>
        {reviews && (
          <ReviewsList reviews={more ? reviews : reviews.slice(0, 2)} />
        )}
      </div>
      <button type="button" onClick={() => setMore(true)}>
        More Reviews
      </button>
    </>
  );
}

export default Ratings;
