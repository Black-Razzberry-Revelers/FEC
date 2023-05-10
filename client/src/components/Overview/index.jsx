import React from 'react';
import ProductInfo from './productInfo';
import StyleSelect from './styleSelect';
import Gallery from './Gallery';
import AddToCart from './addToCart';
import { styleContext } from '../App';

export default function Overview({ avgRating, product }) {
  const { style, setStyle, styles } = React.useContext(styleContext);
  const [gallery, setGallery] = React.useState(style.photos);
  const [display, setDisplay] = React.useState('');

  React.useEffect(() => {
    if (style.photos) {
      setGallery(style.photos);
      setDisplay(style.photos[0].url);
    }
  }, [style]);


  return (
    <>
      <h1>
        {product.name}
      </h1>
      <div>
        {avgRating}
      </div>
      <div>
        in: {product.category}
      </div>
      <div className="overview">
        <div className="stylesinfo">
          <ProductInfo product={product} avgRating={avgRating} />
          <StyleSelect styles={styles} />
          <AddToCart />
        </div>
        <Gallery gallery={gallery} display={display} setDisplay={setDisplay} />
      </div>
    </>
  );
}
