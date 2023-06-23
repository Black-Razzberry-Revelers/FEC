import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import ItemCard from './ItemCard';
// import { currentItem } from './exampleData'; // stub data
import { styleContext } from '../../App';

export default function OutfitItemsList() {
  const { styles, product } = useContext(styleContext);
  const [outfitItems, setOutfitItems] = useState(
    JSON.parse(localStorage.getItem('outfitItems')) || [],
  );
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="outfit carousel">
      <h2 className="section-head">Your Outfit</h2>
      <button
        type="button"
        className="related-items outfit "
        id="add-item-to-outfit"
        onClick={(e) => {
          const productIds = outfitItems.map((item) => item.product.id);
          if (!productIds.includes(product.id)) {
            setOutfitItems([...outfitItems, { product, styles }]);
            localStorage.setItem('outfitItems', JSON.stringify([...outfitItems, { product, styles }]));
          }
        }}
      >
        +  Add to Your Outfit
      </button>
      <div className="outfit list inner" style={{ transform: `translateX(-${activeIndex * 20.5}rem)` }}>
        {outfitItems.map((item) => (
          <ItemCard
            key={item.product.id}
            item={{ product: item.product, styles: item.styles }}
            outfitItems={outfitItems}
            setOutfitItems={setOutfitItems}
            outfitList
          />
        ))}
      </div>
      <button className="related-items arrow-nav left-arrow" type="button" hidden={activeIndex === 0} onClick={(e) => setActiveIndex(activeIndex - 1)}>{'<'}</button>
      <button className="related-items arrow-nav right-arrow" type="button" onClick={(e) => setActiveIndex(activeIndex + 1)}>{'>'}</button>
    </div>
  );
}
