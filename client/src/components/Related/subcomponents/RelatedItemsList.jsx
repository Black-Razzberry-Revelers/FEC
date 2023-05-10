import React from 'react';
import ItemCard from './ItemCard';
import { currentItem, relatedItems } from './exampleData';

export default function RelatedItemsList() {
  return (
    <div className="related-items container">
      <h2>Related Items List</h2>
      <div className="related-items list">
        {relatedItems.map((item) => (
          <div className="related-items item-card">
            <ItemCard key={item.id} item={item} outfitList={false} />
          </div>
        ))}
      </div>
    </div>
  );
}
