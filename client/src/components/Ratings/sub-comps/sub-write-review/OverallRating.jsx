/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';

function OverallRating({ star, setStar }) {
  const status = ['', 'Poor', 'Fair', 'Average', 'Good', 'Great'];
  return (
    <div className="overall-rating">
      <div className="outlined-stars">
        <i className={`fa-${star > 0 ? 'solid' : 'regular'} fa-star`} onClick={() => setStar(1)} />
        <i className={`fa-${star > 1 ? 'solid' : 'regular'} fa-star`} onClick={() => setStar(2)} />
        <i className={`fa-${star > 2 ? 'solid' : 'regular'} fa-star`} onClick={() => setStar(3)} />
        <i className={`fa-${star > 3 ? 'solid' : 'regular'} fa-star`} onClick={() => setStar(4)} />
        <i className={`fa-${star > 4 ? 'solid' : 'regular'} fa-star`} onClick={() => setStar(5)} />
      </div>
      {status[star]}
    </div>
  );
}

export default OverallRating;
