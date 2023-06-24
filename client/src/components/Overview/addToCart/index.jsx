/* eslint-disable react/button-has-type */
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
  const styles = {
    width: '20rem',
    height: '3rem',
    marginTop: '3rem',
    background: 'var(--light-alt)',
    fontSize: '22px',
    color: 'white',
  };
  return (
    <div className="option">
      Buy now!
      {clicked ? (
        <button type="reset" onClick={emptyCart}>
          remove from cart
        </button>
      ) : (
        <div>
          <div className="add info-text">
            what size?
            <SelectSize sizes={sizes} />
          </div>
          <button type="button" style={styles} onClick={handleClick}>
            Add To Cart
          </button>
        </div>
      )}
    </div>
  );
}
