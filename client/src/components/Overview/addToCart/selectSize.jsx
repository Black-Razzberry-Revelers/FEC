import React from 'react';
import SelectQuantity from './selectQuantity';
import { styleContext } from '../../App';

export default function SelectSize({ sizes, product }) {
  // drop down of available sizes to choose
  const { style } = React.useContext(styleContext);
  const [size, setSize] = React.useState('size');
  const [quantity, setQuantity] = React.useState(['select a size first']);
  console.log('sizes', sizes)
  const handleChange = (e) => {
    const quants = [];
    let count = e.target.value.split(' ')[1];
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
    form.product = product;
    console.log(form)
  };

  const handleSelect = (e) => {
    console.log('select', e.target)
  }

  return (
    <div>
      {sizes
        ? (
          <form onSubmit={handleSubmit}>
            <select value="size" name="size" onChange={handleChange}>
              {sizes.map((option) => (
                <option
                  key={option.key}
                >
                  {`${option.size} ${option.quantity}`}
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
