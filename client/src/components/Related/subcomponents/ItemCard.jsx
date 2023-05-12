import React, { useContext } from 'react';
import ComparisonModal from './ComparisonModal';
import { styleContext } from '../../App';

export default function ItemCard({
  item, outfitItems, setOutfitItems, outfitList, setProduct,
}) {
  const {
    style, setStyle, styles, setStyles,
  } = useContext(styleContext);
  const defaultStyle = item.styles.filter((style) => style['default?'] === true);
  const placeholder = 'https://static-00.iconduck.com/assets.00/image-icon-256x256-09od4zyo.png';
  const thumbnail = defaultStyle.length > 0 ? defaultStyle[0].photos[0].thumbnail_url
    : item.styles[0].photos[0].thumbnail_url;
  return (
    <>
      <div
        className="card-info"
        role="link"
        tabIndex="0"
        onClick={(e) => {
          setProduct(item.product);
          setStyles(item.styles);
          console.log('Related Item Default Style:', defaultStyle[0]);
          setStyle(defaultStyle[0]);
        }}
        onKeyDown={(e) => {
          console.log('Keyboard Event:', e);
          if (e.code === 'Enter') {
            setProduct(item.product);
            setStyles(item.styles);
            console.log('Related Item Default Style:', defaultStyle[0]);
            setStyle(defaultStyle[0]);
          }
        }}
      >
        <h3>Item Card</h3>
        <img
          src={thumbnail || placeholder} // need to account for default styles
          alt={item.product.name}
        />
        <div>
          Name:
          {' '}
          {item.product.name}
        </div>
        <div>
          Category:
          {' '}
          {item.product.category}
        </div>
        <div>
          Price: $
          {item.product.default_price}
        </div>
        <div>Rating</div>
      </div>
      <button
        type="button"
        onClick={(e) => {
          if (outfitList) {
            const outfitItemsFilter = outfitItems.filter(
              (outfitItem) => outfitItem.product.id !== item.product.id,
            );
            setOutfitItems(outfitItemsFilter);
            localStorage.setItem('outfitItems', JSON.stringify(outfitItemsFilter));
          } else {
            const node = document.querySelector(`#modal-${item.product.id}`);
            node.hidden = !node.hidden;
          }
        }}
      >
        {outfitList ? 'Delete' : 'Compare'}
      </button>
      <div className="related-items modal" id={`modal-${item.product.id}`} hidden>
        <ComparisonModal item={item} />
      </div>
    </>
  );
}
