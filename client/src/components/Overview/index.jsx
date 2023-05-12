/* eslint-disable object-shorthand */
/* eslint-disable no-restricted-syntax */
import React from 'react';
import ProductInfo from './productInfo';
import StyleSelect from './styleSelect';
import Gallery from './Gallery';
import AddToCart from './addToCart';
import { styleContext } from '../App';
import Stars from '../stars';

export default function Overview({ avgRating, product }) {
  const { style, setStyle, styles } = React.useContext(styleContext);
  const [gallery, setGallery] = React.useState([]);

  const [display, setDisplay] = React.useState('');
  const [sizes, setSizes] = React.useState([]);

  React.useEffect(() => {
    console.log('triggered', style);
    if (style.photos) {
      setGallery(style.photos);
      setDisplay(style.photos[0]);
    }
    if (style.skus) {
      const sizesArr = [];
      for (const key in style.skus) {
        if (style.skus[key].quantity) {
          sizesArr.push(
            {
              key: key,
              size: style.skus[key].size,
              quantity: style.skus[key].quantity,
            },
          );
        }
      }
      setSizes(sizesArr);
    }
  }, [style]);

  return (
    <>
      <h1>{product.name}</h1>
      <div>
        in:
        {product.category}
      </div>
      <div>
        {avgRating}
        <Stars />
      </div>

      <div className="overview">

        <div className="stylesinfo">
          <ProductInfo product={product} avgRating={avgRating} />
          <StyleSelect styles={styles} />
          <AddToCart sizes={sizes} />
        </div>

        <div>
          <Gallery gallery={gallery} display={display} setDisplay={setDisplay} />
        </div>

      </div>
    </>
  );
}
