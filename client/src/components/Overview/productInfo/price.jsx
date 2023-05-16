/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import { styleContext } from '../../App';

export default function Price() {
  const { style } = React.useContext(styleContext);
  // if onSale cross out default price and display sale price
  return (
    style.sale_price
      ? <div className="info-text"> {style.sale_price} </div>
      : <div className="info-text"> {style.original_price} </div>
  );
}
