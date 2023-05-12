import React from 'react';
import { styleContext } from '../../App';

export default function SelectSize({ sizes }) {
  // drop down of available sizes to choose
  const { style } = React.useContext(styleContext);
  const [size, setSize] = React.useState('size');
  console.log('sizes', sizes)

  return (
    <div>
      {sizes
        ? (
          <select defaultValue="pick a size">
            {sizes.map((option) => <option key={option.key}>{option.size}</option>)}
          </select>
        )
        : <div>loading...</div>}
    </div>
  );
}
