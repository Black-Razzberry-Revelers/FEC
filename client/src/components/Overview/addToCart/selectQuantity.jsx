import React from 'react';

export default function SelectQuantity({ quantity }) {
  // drop down menu with click option

  return (
    quantity
      ? <select defaultValue="1" name="quantity">
          {quantity.map((quant) => <option key={quant} value={quant}>{quant}</option>)}
        </select>
      : <div />
  );
}
