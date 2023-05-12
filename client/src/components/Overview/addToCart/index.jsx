import React from 'react';
import SelectSize from './selectSize';
import SelectQuantity from './selectQuantity';

export default function AddToCart({ sizes }) {
  const [clicked, setClicked] = React.useState(false);
  const [quantities, setQuantities] = React.useState([]);
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
            <SelectSize sizes={sizes} quantities={quantities}/>
            <SelectQuantity />
          </div>
        )
        : <button type="button" onClick={handleClick}>Add To Cart</button>}
    </div>
  );
}
