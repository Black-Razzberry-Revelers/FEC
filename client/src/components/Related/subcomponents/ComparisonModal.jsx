import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { currentItem } from './exampleData';
import { styleContext } from '../../App';
import Stars from '../../stars';
import findAvgRating from '../../../calculateAvgRating';

export default function ComparisonModal({ item }) {
  const { product, comparisonModalClickHandler, avgRating } = useContext(styleContext);

  function buildFeatureObj(features) {
    const obj = {};
    features.forEach((feature) => { obj[feature.feature] = feature.value; });
    return obj;
  }

  const itemFeatures = buildFeatureObj(item.product.features);
  const productFeatures = buildFeatureObj(product.features);
  return (
    <>
      <div className="related-items comparison-modal" id="comparison-modal" hidden>
        <table>
          <caption className="label">Comparing</caption>
          <thead>
            <tr>
              <th className="info-text" scope="col">{item.product.name}</th>
              <th className="info-text" scope="col">{' '}</th>
              <th className="info-text" scope="col">{product.name}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="info-text">{item.product.default_price}</td>
              <td className="label">Price</td>
              <td className="info-text">{product.default_price}</td>
            </tr>
            <tr>
              <td className="info-text">{item.product.category}</td>
              <td className="label">Category</td>
              <td className="info-text">{product.category}</td>
            </tr>
            {Object.keys(itemFeatures).map((key, i) => (
              <tr>
                <td className="info-text" key={itemFeatures[key] + i || i}>{itemFeatures[key]}</td>
                <td className="label" key={key + i}>{key}</td>
                <td className="info-text" key={productFeatures[key] + i || i}>{productFeatures[key] || ''}</td>
              </tr>
            ))}
            {Object.keys(productFeatures).map((key, i) => {
              let node;
              if (!Object.keys(itemFeatures).includes(key)) {
                console.log('Keys:', itemFeatures[key] + i, key + i, productFeatures[key] + i);
                node = (
                  <tr>
                    <td className="info-text" key={productFeatures[key] + i || i}>{itemFeatures[key] || ''}</td>
                    <td className="label" key={key + i}>{key}</td>
                    <td className="info-text" key={productFeatures[key] + i || i}>{productFeatures[key]}</td>
                  </tr>
                );
              }
              return node;
            })}
            <tr>
              <td className="info-text"><Stars avgRating={findAvgRating(item.ratings || {})} /></td>
              <td className="label">Rating</td>
              <td className="info-text"><Stars avgRating={avgRating} /></td>
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
      id: PropTypes.number,
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
  }),
};

ComparisonModal.defaultProps = {
  item: { product: { features: [] } },
};
