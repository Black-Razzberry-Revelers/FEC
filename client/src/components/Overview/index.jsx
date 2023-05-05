import React from 'react';
import ProductInfo from './productInfo';
import StyleSelect from './styleSelect';
import Gallery from './Gallery';
import AddToCart from './addToCart';

export default function Overview() {
  const [style, setStyle] = React.useState([]);

  return (
    <div>
      <ProductInfo style={style} />
      <StyleSelect style={style} setStyle={setStyle} />
      <Gallery />
      <AddToCart />
    </div>
  );
}
