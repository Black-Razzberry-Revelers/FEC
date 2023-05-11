import React from 'react';
import { currentItem } from './exampleData';

export default function ComparisonModal({ item }) {
  return (
    <table>
      <caption>Comparing</caption>
      <thead>
        <th scope="col">{item.name}</th>
        <th scope="col">{' '}</th>
        <th scope="col">{currentItem.name}</th>
      </thead>
      <tbody>
        <tr>
          <td>{item.default_price}</td>
          <td>Price</td>
          <td>{currentItem.default_price}</td>
        </tr>
        <tr>
          <td>{item.category}</td>
          <td>Category</td>
          <td>{currentItem.category}</td>
        </tr>
      </tbody>
    </table>
  );
}
