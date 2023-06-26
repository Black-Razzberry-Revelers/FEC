import React from 'react';
import starEmpty from '../../dist/assets/icons8-star-16-empty.png';
import starFilled from '../../dist/assets/icons8-star-16-filled.png';

export default function Stars({ avgRating, starWidth, starHeight }) {
  let floor = Math.floor(avgRating);
  let percent = (avgRating - Math.floor(avgRating)) * 100;
  if (percent >= 87.5) {
    percent = 20;
  } else if (percent >= 62.5 && percent < 87.5) {
    percent = 15;
  } else if (percent >= 37.5 && percent < 62.5) {
    percent = 10;
  } else if (percent >= 12.5 && percent < 37.5) {
    percent = 7.5;
  } else {
    percent = 0;
  }
  const filled = [];
  while (floor > 0) {
    filled.push('star');
    floor -= 1;
  }
  const styles = {
    wide: starWidth,
    height: starHeight,

  };

  return (
    <div className="stars-container">
      <div className="stars stars-empty">
        {[1, 2, 3, 4, 5].map((num) => (
          <span key={`${num}emptyStar`}>
            <img style={styles} src={starEmpty} alt="star" />
          </span>
        ))}
      </div>
      <div className="stars stars-filled">
        {filled.map((star, i) => (
          <span key={`${i}filledStar`} className="star">
            <img style={styles} src={starFilled} alt="star" />
          </span>
        ))}
        <span
          className="star"
          style={{
            width: `${percent}%`,
            // overflow: 'hidden',
            // paddingRight: '5px',
          }}
        >
          <img
            style={styles}
            src={starFilled}
            alt="star"
          />
        </span>
      </div>
    </div>
  );
}
