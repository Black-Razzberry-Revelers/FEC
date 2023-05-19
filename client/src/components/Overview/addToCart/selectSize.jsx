import React from 'react';
import SelectQuantity from './selectQuantity';
import { styleContext } from '../../App';

export default function SelectSize({ sizes }) {
  const { style, product } = React.useContext(styleContext);
  const [size, setSize] = React.useState('size');
  const [quantity, setQuantity] = React.useState(['select a size first']);
  const [cart, setCart] = React.useState(JSON.parse(localStorage.getItem('cart')) || []);

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
    const data = new FormData(e.target);
    const form = Object.fromEntries(data.entries());
    form.style = style;
    form.product = product;
    localStorage.setItem('cart', JSON.stringify([...cart, form]));
  };

  return (
    <div>
      {sizes
        ? (
          <form data-testid="form" onSubmit={handleSubmit}>
            <select data-testid="select" defaultValue={size} name="size" onChange={handleChange}>
              {sizes.map((option) => (
                <option
                  key={option.key}
                  value={`${option.size} ${option.quantity}`}
                >
                  {`${option.size} ${option.quantity}`}
                </option>
              ))}
            </select>
            <SelectQuantity quantity={quantity} />
          </form>
        )
        : <div>loading...</div>}
    </div>
  );
}
