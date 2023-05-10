import React from 'react';
import SelectSize from './selectSize';
import SelectQuantity from './selectQuantity';

export default function AddToCart() {
  // may want to utilize form submission
  return (
    <div className="add">
      How many do you want?
      <SelectSize />
      <SelectQuantity />
      <button type="button">Add To Cart</button>
    </div>
  );
}
