import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { currentItem } from './exampleData';
import { styleContext } from '../../App';

export default function ComparisonModal({ item }) {
  const { product, comparisonModalClickHandler } = useContext(styleContext);
  return (
    <>
      <div className="related-items comparison-modal" id="comparison-modal" hidden>
        <table>
          <caption>Comparing</caption>
          <thead>
            <tr>
              <th scope="col">{item.product.name}</th>
              <th scope="col">{' '}</th>
              <th scope="col">{product.name}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{item.product.default_price}</td>
              <td>Price</td>
              <td>{product.default_price}</td>
            </tr>
            <tr>
              <td>{item.product.category}</td>
              <td>Category</td>
              <td>{product.category}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div
        className="related-items comparison-modal"
        id="comparison-modal-overlay"
        role="button"
        tabIndex="0"
        aria-label="comparison-modal-overlay"
        hidden
        onClick={(e) => {
          comparisonModalClickHandler();
        }}
        onKeyDown={(e) => {
          comparisonModalClickHandler();
        }}
      />
    </>
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
    styles: PropTypes.shape({
      product_id: PropTypes.string,
      results: PropTypes.arrayOf(PropTypes.shape({
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
    }),
  }).isRequired,
};
