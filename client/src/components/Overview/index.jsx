import React from 'react';
import ProductInfo from './productInfo';
import StyleSelect from './styleSelect';
import Gallery from './Gallery';
import AddToCart from './addToCart';
import { productsData, productData, stylesData } from './mockData';

export const styleContext = React.createContext(null);

export default function Overview() {
  const [styles, setStyles] = React.useState(stylesData.results);
  const [style, setStyle] = React.useState(styles[0]);

  React.useEffect(() => {
    // GET
    setStyles(stylesData.results);
    console.log('rendering')
    styles.forEach((option, i) => {
      option.index = i;
      if (option['default?']) {
        setStyle(option);
        console.log('style set', style);
      }
    });
  }, []);

  return (
    <styleContext.Provider value={{ style, setStyle, styles }}>
      <ProductInfo />
      <StyleSelect styles={styles} />
      <Gallery />
      <AddToCart />
    </styleContext.Provider>
  );
}

