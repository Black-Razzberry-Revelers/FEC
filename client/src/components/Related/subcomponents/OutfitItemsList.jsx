import React, { useState, useContext } from 'react';
import ItemCard from './ItemCard';
// import { currentItem } from './exampleData'; // stub data
import { styleContext } from '../../App';

export default function OutfitItemsList({ currentProduct, setProduct }) {
  const { styles } = useContext(styleContext);
  const [outfitItems, setOutfitItems] = useState(
    JSON.parse(localStorage.getItem('outfitItems')) || [],
  );
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="outfit carousel">
      <h2>Outfit Items List</h2>
      <button
        type="button"
        className="outfit"
        id="add-item-to-outfit"
        onClick={(e) => {
          const productIds = outfitItems.map((item) => item.product.id);
          if (!productIds.includes(currentProduct.id)) {
            setOutfitItems([...outfitItems, { product: currentProduct, styles }]);
            localStorage.setItem('outfitItems', JSON.stringify([...outfitItems, { product: currentProduct, styles }]));
          }
        }}
      >
        +
      </button>
      <div className="outfit list inner" style={{ transform: `translateX(-${activeIndex * 33}%)` }}>
        {outfitItems.map((item) => (
          <div className="outfit carousel-item item-card" key={item.product.id}>
            <ItemCard
              key={item.product.id}
              item={{ product: item.product, styles: item.styles }}
              outfitItems={outfitItems}
              setOutfitItems={setOutfitItems}
              outfitList
              setProduct={setProduct}
            />
          </div>
        ))}
      </div>
      <button type="button" hidden={activeIndex === 0} onClick={(e) => setActiveIndex(activeIndex - 1)}>{'<'}</button>
      <button type="button" onClick={(e) => setActiveIndex(activeIndex + 1)}>{'>'}</button>
    </div>
  );
}
