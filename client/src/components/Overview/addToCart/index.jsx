import React from 'react';
import SelectSize from './selectSize';

export default function AddToCart({ sizes }) {
  const [clicked, setClicked] = React.useState(false);
  //  use a form for values of selects?

  const handleClick = () => {
    setClicked(true);
  };

  const emptyCart = (e) => {
    localStorage.removeItem('cart');
    setClicked(false);
  };

  return (
    <div className="option">
      Buy now!
      {clicked
        ? <button type="reset" onClick={emptyCart}>remove from cart</button>
        : (
          <div>
            <div className="add info-text">
              what size?
              <SelectSize sizes={sizes} />
            </div>
            <button type="button" onClick={handleClick}>Add To Cart</button>
          </div>
        )}
    </div>
  );
}
