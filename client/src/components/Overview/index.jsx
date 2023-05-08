import React from 'react';
import ProductInfo from './productInfo';
import StyleSelect from './styleSelect';
import Gallery from './Gallery';
import AddToCart from './addToCart';
import { productsData, productData, stylesData } from './mockData';

export default function Overview() {
  const [styles, setStyles] = React.useState(stylesData.results);
  const [style, setStyle] = React.useState(styles[0]);

  const styleContext = React.createContext(style);

  return (
    <div>
      <StyleSelect style={style} setStyle={setStyle} />
      <styleContext.Provider value={style.name}>
        <ProductInfo />
        <Gallery />
      </styleContext.Provider>
      <AddToCart />
    </div>
  );
}
