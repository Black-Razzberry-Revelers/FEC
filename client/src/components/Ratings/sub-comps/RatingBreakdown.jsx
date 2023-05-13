/* eslint-disable react/react-in-jsx-scope */
import { useState } from 'react';
import averageRating from '../../../calculateAvgRating';

function RatingBreakdown({ metaData }) {
  const ratingStyle = {
    display: 'inline-block',
    position: 'relative',
    lineHeight: '1em',
  };
  const solidStars = {
    position: 'absolute',
    width: `${(averageRating(metaData.ratings) * 100) / 5.5}%`,
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    fontSize: '20px',
  };

  const outlinedStars = {
    whiteSpace: 'nowrap',
    fontSize: '20px',
  };

  const totalReviews = Object.values(metaData.ratings).reduce(
    (acc, curr) => Number(acc) + Number(curr),
    0,
  );

  console.log('>>>>>>>>>>>>>>>>>>', totalReviews);

  return (
    <>
      <h2>{averageRating(metaData.ratings)}</h2>
      <div className="product-info-rating" style={ratingStyle}>
        <div className="solid-stars" style={solidStars}>
          <i className="fa-solid fa-star" />
          <i className="fa-solid fa-star" />
          <i className="fa-solid fa-star" />
          <i className="fa-solid fa-star" />
          <i className="fa-solid fa-star" />
        </div>
        <div className="outlined-stars" style={outlinedStars}>
          <i className="fa-regular fa-star" />
          <i className="fa-regular fa-star" />
          <i className="fa-regular fa-star" />
          <i className="fa-regular fa-star" />
          <i className="fa-regular fa-star" />
        </div>
      </div>
      <div>
        {Object.values(metaData.ratings).map((rating, i) => (
          <div key={i + 1}>
            <div>
              {i + 1}
              {' '}
              Stars
              <span>{rating}</span>
            </div>
            <div style={{ display: 'flex' }}>
              <div
                className="green"
                style={{
                  width: `${(rating / totalReviews) * 100}%`,
                  backgroundColor: 'green',
                  height: '10px',
                }}
              />
              <div
                className="gray"
                style={{
                  width: `${((totalReviews - rating) / totalReviews) * 100}%`,
                  backgroundColor: 'gray',
                  height: '10px',
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default RatingBreakdown;
