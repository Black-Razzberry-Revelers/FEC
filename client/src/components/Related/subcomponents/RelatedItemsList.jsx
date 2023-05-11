import React, { useState } from 'react';
import ItemCard from './ItemCard';
import { currentItem, relatedItems } from './exampleData';

export default function RelatedItemsList() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="related-items carousel">
      <h2>Related Items List</h2>
      <div className="related-items list inner" style={{ transform: `translateX(-${activeIndex * 33}%)` }}>
        {relatedItems.products.map((item, i) => (
          <div className="related-items carousel-item item-card" key={item.id}>
            <ItemCard
              key={item.id}
              item={{ product: item, styles: relatedItems.styles[i] }}
              outfitList={false}
            />
          </div>
        ))}
      </div>
      <button type="button" hidden={activeIndex === 0} onClick={(e) => setActiveIndex(activeIndex - 1)}>{'<'}</button>
      <button type="button" onClick={(e) => setActiveIndex(activeIndex + 1)}>{'>'}</button>
    </div>
  );
}
