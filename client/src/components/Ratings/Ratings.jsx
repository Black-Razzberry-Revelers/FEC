/* eslint-disable react/react-in-jsx-scope */
import { useState, useEffect } from 'react';
import fetcher from '../fetcher';
import ReviewsList from './sub-comps/ReviewsList';
import RatingBreakdown from './sub-comps/RatingBreakdown';

function Ratings(/* {product_id, count} */) {
  const [reviews, setReviews] = useState();
  const [metaData, setMetaData] = useState();
  const [moreReviews, setMoreReviews] = useState(false);
  const [sortReviews, setSortReviews] = useState('relevant');

  useEffect(() => {
    fetcher
      .getListReviews(1, 1000, sortReviews, 40346)
      .then((result) => {
        setReviews(result.data.results);
      })
      .catch((err) => console.log('RATINGS GET LIST REVIEWS ERR', err));
    fetcher
      .getReviewsMetadata(40346)
      .then((result) => setMetaData(result.data))
      .catch((err) => console.log('RATINGS GET META DATA ERR', err));
  }, [sortReviews]);
  return (
    <>
      <h2>Ratings & Reviews</h2>
      <div className="right">
        <h3>{reviews && `${reviews.length} Reviews, sorted by`}</h3>
        <select onChange={(e) => setSortReviews(e.target.value)}>
          <option value="relevant">Relevant</option>
          <option value="helpful">Helpful</option>
          <option value="newest">Newest</option>
        </select>

        {reviews && (
          <ReviewsList reviews={moreReviews ? reviews : reviews.slice(0, 2)} />
        )}
        <button type="button" onClick={() => setMoreReviews(true)}>
          More Reviews
        </button>
      </div>

      <div className="left">
        {metaData && <RatingBreakdown metaData={metaData} />}
      </div>
    </>
  );
}

export default Ratings;
