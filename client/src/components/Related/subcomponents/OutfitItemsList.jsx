import React, { useState } from 'react';
import ItemCard from './ItemCard';
import { currentItem } from './exampleData'; // stub data

export default function OutfitItemsList() {
  const [outfitItems, setOutfitItems] = useState(
    JSON.parse(localStorage.getItem('outfitItems')) || [],
  );

  return (
    <div className="outfit container">
      <h2>Outfit Items List</h2>
      <div className="outfit list">
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
        {outfitItems.map((item) => (
          <div className="outfit item-card">
            <ItemCard
              key={item.id}
              item={item}
              outfitItems={outfitItems}
              setOutfitItems={setOutfitItems}
              outfitList
            />
          </div>
        ))}
      </div>
    </div>
  );
}
