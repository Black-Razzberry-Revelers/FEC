import React from 'react';
import { starsContext } from './App';
import starEmpty from '../icons8-star-ios-16-16.png';
import starFilled from '../icons8-star-ios-16-filled-16.png';

export default function Stars() {
  const { avgRating, setAvgRating } = React.useContext(starsContext);
  let floor = Math.floor(avgRating);
  let percent = Math.ceil((avgRating - Math.floor(avgRating)) * 10);
  const percentText = `${percent}%`;
  const filled = [];
  while (floor > 0) {
    filled.push('star');
    floor--;
  }
  console.log(percent)

  return (
    <div className="bar">
      <div className="stars">
        <div className="stars" id="empty">
          <div>
            <img src={starEmpty} alt="star" />
          </div>
          <div>
            <img src={starEmpty} alt="star" />
          </div>
          <div>
            <img src={starEmpty} alt="star" />
          </div>
          <div>
            <img src={starEmpty} alt="star" />
          </div>
          <div>
            <img src={starEmpty} alt="star" />
          </div>
        </div>
        <div className="stars" id="filled">
          {filled.map((star, i) => (
            <div key={i} className="star">
              <img src={starFilled} alt="star" />
            </div>
          ))}
          <div className="star" style={{ width: `${percent}%`, overflow: 'hidden', 'padding-right': '5px'}}>
            <img src={starFilled} alt="star" style={{'padding-bottom': '20%'}} />
          </div>
        </div>
      </div>
    </div>
  );
}
