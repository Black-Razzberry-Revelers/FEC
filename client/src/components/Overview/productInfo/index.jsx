import React from 'react';
import Price from './price';
import Share from './share';
import Description from './description';
import { styleContext } from '../index';

export default function ProductInfo({ product, avgRating }) {
  const { style } = React.useContext(styleContext);

  return (
    <>
      <h1>
        {product.name}
        <div> rating: {avgRating} </div>
      </h1>
      <div>in: {product.category}</div>
      <Description product={product} />
      <Price />
      <Share />
    </>
  );
}
