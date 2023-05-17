import React from 'react';
import SelectSize from './selectSize';

export default function AddToCart({ sizes }) {
  const [clicked, setClicked] = React.useState(false);
  //  use a form for values of selects?

  const handleClick = () => {
    setClicked(true);
  };

  const reset = () => {
    setClicked(false);
  };

  const emptyCart = (e) => {
    localStorage.removeItem('cart');
  };

  return (
    <div className="option">
      Buy now!
      {clicked
        ? (
          <div className="option">
            what size?
            <SelectSize sizes={sizes} />
            <button type="reset" onClick={reset}>nevermind</button>
          </div>
        )
        : (
          <div>
            <button type="button" onClick={handleClick}>Add To Cart</button>
            <button type="reset" onClick={emptyCart}>clear cart</button>
          </div>
        )}
    </div>
  );
}
