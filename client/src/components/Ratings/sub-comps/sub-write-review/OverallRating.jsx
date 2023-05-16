/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';

function OverallRating({ person, setPerson }) {
  const status = ['', 'Poor', 'Fair', 'Average', 'Good', 'Great'];
  return (
    <div className="overall-rating">
      <div className="outlined-stars">
        <i
          className={`fa-${person.rating > 0 ? 'solid' : 'regular'} fa-star`}
          required
          onClick={() => setPerson({
            ...person,
            rating: 1,
          })}
        />
        <i
          className={`fa-${person.rating > 1 ? 'solid' : 'regular'} fa-star`}
          required
          onClick={() => setPerson({
            ...person,
            rating: 2,
          })}
        />
        <i
          className={`fa-${person.rating > 2 ? 'solid' : 'regular'} fa-star`}
          required
          onClick={() => setPerson({
            ...person,
            rating: 3,
          })}
        />
        <i
          className={`fa-${person.rating > 3 ? 'solid' : 'regular'} fa-star`}
          required
          onClick={() => setPerson({
            ...person,
            rating: 4,
          })}
        />
        <i
          className={`fa-${person.rating > 4 ? 'solid' : 'regular'} fa-star`}
          required
          onClick={() => setPerson({
            ...person,
            rating: 5,
          })}
        />
      </div>
      {status[person.rating]}
    </div>
  );
}

export default OverallRating;
