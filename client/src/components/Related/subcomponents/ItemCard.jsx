import React from 'react';
import ComparisonModal from './ComparisonModal';

export default function ItemCard({ item, outfitItems, setOutfitItems, outfitList }) {
  const defaultStyle = item.results.filter((style) => style['default?'] === true);
  const placeholder = 'https://static-00.iconduck.com/assets.00/image-icon-256x256-09od4zyo.png';
  const thumbnail = defaultStyle.length > 0 ? defaultStyle[0].photos[0].thumbnail_url
    : item.results[0].photos[0].thumbnail_url;
  return (
    <>
      <h3>Item Card</h3>
      <img
        src={thumbnail || placeholder} // need to account for default styles
        alt={item.name}
      />
      <div>
        Name:
        {' '}
        {item.name}
      </div>
      <div>
        Category:
        {' '}
        {item.category}
      </div>
      <div>
        Price: $
        {item.default_price}
      </div>
      <div>Rating</div>
      <button
        type="button"
        onClick={(e) => {
          if (outfitList) {
            const outfitItemsFilter = outfitItems.filter(
              (outfitItem) => outfitItem.id !== item.id
            );
            setOutfitItems(outfitItemsFilter);
            localStorage.setItem('outfitItems', JSON.stringify(outfitItemsFilter));
          } else {
            const node = document.querySelector(`#modal-${item.id}`);
            node.hidden = !node.hidden;
          }
        }}
      >
        {outfitList ? 'Delete' : 'Compare'}
      </button>
      <div className="related-items modal" id={`modal-${item.id}`} hidden>
        <ComparisonModal item={item} />
      </div>
    </>
  );
}
