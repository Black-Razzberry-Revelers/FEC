import React from 'react';
import ItemCard from './ItemCard';
import { currentItem, relatedItems } from './exampleData';

export default function RelatedItemsList() {
  return (
    <div>
      <h2>Related Items List</h2>
      <div>{relatedItems.map((item) => <ItemCard key={item.id} item={item} />)}</div>
    </div>
  );
}
