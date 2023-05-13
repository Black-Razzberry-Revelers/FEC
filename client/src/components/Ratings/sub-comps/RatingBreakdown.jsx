/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/react-in-jsx-scope */
import { useState } from 'react';
import averageRating from '../../../calculateAvgRating';
import Stars from '../../stars';

function RatingBreakdown({ metaData, filters, setFilters }) {
  const totalReviews = Object.values(metaData.ratings).reduce(
    (acc, curr) => Number(acc) + Number(curr),
    0,
  );

  const handleFilterClick = (rating) => {
    let updatedFilter;
    if (filters.includes(rating)) {
      updatedFilter = filters.filter((filter) => filter !== rating);
    } else {
      updatedFilter = [...filters, rating];
    }
    setFilters(updatedFilter);
  };
  return (
    <>
      <h2>{averageRating(metaData.ratings)}</h2>
      <Stars avgRating={averageRating(metaData.ratings)} />
      <div>
        {Object.values(metaData.ratings).map((rating, i) => (
          <div key={i + 1} className="bar" onClick={() => handleFilterClick(i + 1)}>
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
      <div>
        {filters.length
          ? <p onClick={() => setFilters([])}>Remove All Filters</p> : null}
      </div>
    </>
  );
}

export default RatingBreakdown;
