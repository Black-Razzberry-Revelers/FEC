import React from 'react';
import SelectQuantity from './selectQuantity';
import { styleContext } from '../../App';

export default function SelectSize({ sizes }) {
  // drop down of available sizes to choose
  const { style } = React.useContext(styleContext);
  const [size, setSize] = React.useState('size');
  const [quantity, setQuantity] = React.useState(['select a size first']);
  console.log('sizes', sizes)
  const handleChange = (e) => {
    console.log(e);
    const quants = [];
    let count = e.target.value;
    while (count > 0) {
      quants.unshift(count.toString());
      count -= 1;
    }
    setQuantity(quants);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let data = new FormData(e.target);
    let form = Object.fromEntries(data.entries());
    form.style = style;
    form.product = 'product name';
    console.log(e.target.innerText)
  }

  return (
    <div>
      {sizes
        ? (
          <form onSubmit={handleSubmit}>
            <select defaultValue="M" name="size" onChange={handleChange}>
              {sizes.map((option) => (
                <option
                  key={option.key}
                  value={option.quantity}
                >
                  {`${option.size}(${option.quantity})`}
                </option>
              ))}
            </select>
            <SelectQuantity quantity={quantity} />
            <button type="submit">Add</button>
          </form>
        )
        : <div>loading...</div>}
    </div>
  );
}
