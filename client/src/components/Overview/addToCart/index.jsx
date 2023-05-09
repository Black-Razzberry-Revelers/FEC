import React from 'react';
import SelectSize from './selectSize';
import SelectQuantity from './selectQuantity';

export default function AddToCart() {
  // may want to utilize form submission
  return (
    <>
      <SelectSize />
      <SelectQuantity />
      <button type="button">Add To Cart</button>
    </>
  );
}
