import React from 'react';

export default function SelectQuantity({ quantity }) {
  // drop down menu with click option

  return (
    quantity
      ? (
        <select data-testid="select" defaultValue="1" name="quantity">
          {quantity.map((quant, i) => <option key={i} value={quant} label={quant} />)}
        </select>
      )
      : <div />
  );
}
