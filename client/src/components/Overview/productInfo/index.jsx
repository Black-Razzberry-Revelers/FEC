import React from 'react';
import Price from './price';
import Share from './share';
import Description from './description';

export default function ProductInfo() {
  return (
    <div role="main" className="info">
      <Description />
      <Price />
      <Share />
    </div>
  );
}
