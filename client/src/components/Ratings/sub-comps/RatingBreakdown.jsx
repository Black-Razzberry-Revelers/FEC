/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/react-in-jsx-scope */
import { useState } from 'react';

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
    <div className="RatingBreakdown">

      <div className="ratings-bars">
        {Object.values(metaData.ratings).map((rating, i) => (
          <div key={i + 1} className="rating-bar" onClick={() => handleFilterClick(i + 1)}>
            <div>
              {i + 1}
              {' '}
              Stars
            </div>
            <div style={{ display: 'flex' }}>
              <div
                className="green"
                style={{
                  width: `${(rating / totalReviews) * 100}%`,
                  backgroundColor: '#545656',
                  height: '10px',
                }}
              />
              <div
                className="gray"
                style={{
                  width: `${((totalReviews - rating) / totalReviews) * 100}%`,
                  backgroundColor: '#c6cccc',
                  height: '10px',
                }}
              />
            </div>
            <span>{rating}</span>
          </div>
        )).reverse()}
      </div>
      <div>
        {filters.length
          ? <p onClick={() => setFilters([])}>Remove All Filters</p> : null}
      </div>

    </div>
  );
}

export default RatingBreakdown;
