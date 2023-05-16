import React from 'react';
import SelectSize from './selectSize';

export default function AddToCart({ sizes }) {
  const [clicked, setClicked] = React.useState(false);
  //  use a form for values of selects?

  const handleClick = () => {
    setClicked(true);
  };

  return (
    <div>
      {clicked
        ? (
          <div className="add info-text">
            what size?
            <SelectSize sizes={sizes} />
          </div>
        )
        : <button type="button" onClick={handleClick} className="submit-button">Add To Cart</button>}
    </div>
  );
}
