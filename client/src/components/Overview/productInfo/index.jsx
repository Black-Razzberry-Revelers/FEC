import React from 'react';
import Price from './price';
import Share from './share';

export default function ProductInfo() {
  return (
    <>
      <h1>ProductInfo</h1>
      <div>name</div>
      <div>category</div>
      <div>rating</div>
      <Price />
      <Share />
    </>
  );
}
