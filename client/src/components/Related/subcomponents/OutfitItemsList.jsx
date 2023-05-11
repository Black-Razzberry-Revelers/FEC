import React, { useState } from 'react';
import ItemCard from './ItemCard';
import { currentItem } from './exampleData'; // stub data

export default function OutfitItemsList() {
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
          setOutfitItems([...outfitItems, currentItem]);
          localStorage.setItem('outfitItems', JSON.stringify([...outfitItems, currentItem]));
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
            />
          </div>
        ))}
      </div>
      <button type="button" hidden={activeIndex === 0} onClick={(e) => setActiveIndex(activeIndex - 1)}>{'<'}</button>
      <button type="button" onClick={(e) => setActiveIndex(activeIndex + 1)}>{'>'}</button>
    </div>
  );
}
