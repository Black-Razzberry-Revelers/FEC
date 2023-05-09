import React from 'react';

export default function ItemCard({ item }) {
  return (
    <div>
      <h3>Item Card</h3>
      <img
        src={item.results[0].photos[0].thumbnail_url}
        alt={item.name}
      />
      <div>Name: {item.name}</div>
      <div>Category: {item.category}</div>
      <div>Price: ${item.default_price}</div>
      <div>Rating</div>
    </div>
  );
}
