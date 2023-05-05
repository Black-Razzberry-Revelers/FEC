import React from 'react';
import ProductInfo from './productInfo';
import StyleSelect from './styleSelect';


export default function Overview() {

  const [style, setStyle] = React.useState([]);

  return (
    <div>
      <ProductInfo style={style} />
      <StyleSelect style={style} />
      <Gallery />
      <AddToCart />
    </div>
  )
}
