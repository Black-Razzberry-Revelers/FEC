import React from 'react';
import ComparisonModal from './ComparisonModal';

export default function ItemCard({ item, outfitItems, setOutfitItems, outfitList }) {
  const defaultStyle = item.styles.filter((style) => style['default?'] === true);
  // console.log(`Item Card ${item.product.id}:`, item);
  // console.log(`Item Card ${item.product.id} Default Style:`, defaultStyle);
  const placeholder = 'https://static-00.iconduck.com/assets.00/image-icon-256x256-09od4zyo.png';
  const thumbnail = defaultStyle.length > 0 ? defaultStyle[0].photos[0].thumbnail_url
    : item.styles[0].photos[0].thumbnail_url;
  return (
    <>
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
      <button
        type="button"
        onClick={(e) => {
          if (outfitList) {
            const outfitItemsFilter = outfitItems.filter(
              (outfitItem) => outfitItem.product.id !== item.product.id
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
