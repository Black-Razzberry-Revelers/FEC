import React from 'react';
import Price from './price';
import Share from './share';
import Description from './description';
import { styleContext } from '../../App';

export default function ProductInfo({ product, avgRating }) {
  const { style } = React.useContext(styleContext);

  return (
    <div className="info">
      <Description product={product} />
      <Price />
      <Share />
    </div>
  );
}
