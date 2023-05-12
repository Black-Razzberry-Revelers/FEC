import React from 'react';
import SelectSize from './selectSize';

export default function AddToCart({ sizes, product }) {
  const [clicked, setClicked] = React.useState(false);
  //  use a form for values of selects?

  const handleClick = () => {
    setClicked(true);
  };

  return (
    <div>
      {clicked
        ? (
          <div className="add">
            what size?
            <SelectSize sizes={sizes} product={product} />
          </div>
        )
        : <button type="button" onClick={handleClick}>Add To Cart</button>}
    </div>
  );
}
