import React from 'react';
import PropTypes from 'prop-types';
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

ComparisonModal.propTypes = {
  item: PropTypes.shape({
    product: PropTypes.shape({
      id: PropTypes.number.isRequired,
      campus: PropTypes.string,
      name: PropTypes.string,
      slogan: PropTypes.string,
      description: PropTypes.string,
      category: PropTypes.string,
      default_price: PropTypes.string,
      created_at: PropTypes.string,
      updated_at: PropTypes.string,
      features: PropTypes.arrayOf(
        PropTypes.shape({ feature: PropTypes.string, value: PropTypes.string }),
      ),
    }),
    styles: PropTypes.arrayOf(PropTypes.shape({
      style_id: PropTypes.number,
      name: PropTypes.string,
      original_price: PropTypes.string,
      sale_price: PropTypes.string,
      'default?': PropTypes.bool,
      photos: PropTypes.arrayOf(PropTypes.shape({
        thumbnail_url: PropTypes.string,
        url: PropTypes.string,
      })),
      skus: PropTypes.objectOf(PropTypes.shape({
        quantity: PropTypes.number,
        size: PropTypes.string,
      })),
    })),
  }).isRequired,
};
