/* eslint-disable object-shorthand */
/* eslint-disable no-restricted-syntax */
import React from 'react';
import ProductInfo from './productInfo';
import StyleSelect from './styleSelect';
import Gallery from './Gallery';
import AddToCart from './addToCart';
import { styleContext } from '../App';
import Stars from '../stars';

export default function Overview({ avgRating }) {
  const {
    style,
    setStyle,
    styles,
    product,
  } = React.useContext(styleContext);

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
    <div data-testid="overview">
      <h1 data-testid="productName" className="section-head">{product.name}</h1>
      <div data-testid="category" className="sub-head">
        in:
        {product.category}
      </div>
      <div>
        {avgRating}
        <Stars avgRating={avgRating} />
      </div>

      <div className="overview">

        <div className="stylesinfo">
          <ProductInfo />
          <StyleSelect styles={styles} />
          <AddToCart sizes={sizes} />
        </div>

        <div data-testid="gallery">
          <Gallery gallery={gallery} display={display} setDisplay={setDisplay} />
        </div>

      </div>
    </div>
  );
}
