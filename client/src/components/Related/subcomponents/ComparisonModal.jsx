import React from 'react';
import { currentItem } from './exampleData';

export default function ComparisonModal({ item }) {
  return (
    <table>
      <caption>Comparing</caption>
      <thead>
        <tr>
          <th scope="col">{item.product.name}</th>
          <th scope="col">{' '}</th>
          <th scope="col">{currentItem.product.name}</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{item.product.default_price}</td>
          <td>Price</td>
          <td>{currentItem.product.default_price}</td>
        </tr>
        <tr>
          <td>{item.product.category}</td>
          <td>Category</td>
          <td>{currentItem.product.category}</td>
        </tr>
      </tbody>
    </table>
  );
}
