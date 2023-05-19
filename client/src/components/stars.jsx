import React from 'react';
import starEmpty from '../../dist/assets/icons8-star-ios-16-16.png';
import starFilled from '../../dist/assets/icons8-star-ios-16-filled-16.png';

export default function Stars({ avgRating }) {
  let floor = Math.floor(avgRating);
  let percent = Math.ceil((avgRating - Math.floor(avgRating)) * 10);
  if (percent > 7) {
    percent = 10;
  } else if (percent > 4 && percent < 8) {
    percent = 5;
  } else if (percent > 2 && percent < 6) {
    percent = 2.5;
  } else {
    percent = 0;
  }
  const filled = [];
  while (floor > 0) {
    filled.push('star');
    floor -= 1;
  }

  return (
    <div className="bar review-rating-star">
      <div className="stars">
        <div className="stars" id="empty">
          {[1, 2, 3, 4, 5].map((num) => (
            <span key={`${num}emptyStar`}>
              <img src={starEmpty} alt="star" />
            </span>
          ))}
        </div>
        <div className="stars" id="filled">
          {filled.map((star, i) => (
            <span key={`${i}filledStar`} className="star">
              <img src={starFilled} alt="star" />
            </span>
          ))}
          <span
            className="star"
            style={{
              width: `${percent}%`,
              overflow: 'hidden',
              paddingRight: '5px',
            }}
          >
            <img
              src={starFilled}
              alt="star"
              // style={{ paddingBottom: '20%' }}
            />
          </span>
        </div>
      </div>
    </div>
  );
}
