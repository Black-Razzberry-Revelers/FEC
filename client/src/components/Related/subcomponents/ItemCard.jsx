import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Stars from '../../stars';
import ComparisonModal from './ComparisonModal';
import { styleContext } from '../../App';
import findAvgRating from '../../../calculateAvgRating';

export default function ItemCard({
  item, outfitItems, setOutfitItems, outfitList,
}) {
  const {
    setStyle,
    setStyles,
    setProduct,
    avgRating,
    comparisonModalClickHandler,
    setComparisonModalProduct,
  } = useContext(styleContext);
  let defaultStyle = item.styles.results.filter((itemStyle) => itemStyle['default?'] === true);
  if (!defaultStyle.length) {
    defaultStyle = [item.styles.results[0]];
  }
  const placeholder = 'https://static-00.iconduck.com/assets.00/image-icon-256x256-09od4zyo.png';
  const thumbnail = defaultStyle[0].photos[0].thumbnail_url;

  return (
    <div
      className="related-items carousel-item item-card"
      role="link"
      tabIndex="0"
      onClick={(e) => {
        setProduct(item.product);
        setStyles(item.styles);
        setStyle(defaultStyle[0]);
      }}
      onKeyDown={(e) => {
        if (e.code === 'Enter') {
          setProduct(item.product);
          setStyles(item.styles);
          setStyle(defaultStyle[0]);
        }
      }}
    >
      <div className="related-items item-card-image-container">
        <img
          className="related-items"
          src={thumbnail || placeholder} // need to account for default styles
          alt={item.product.name}
        />
      </div>
      <div className="card-info">
        {/* <h3 className="sub-head">Item Card</h3> */}
        <div className="info-text">
          Name:
          {' '}
          {item.product.name}
        </div>
        <div className="info-text">
          Category:
          {' '}
          {item.product.category}
        </div>
        <div className="info-text">
          Price: $
          {item.product.default_price}
        </div>
        <Stars avgRating={item.ratings ? findAvgRating(item.ratings) : avgRating} />
      </div>
      <button
        type="button"
        className="material-symbols-outlined item-card-action related-items"
        onClick={(e) => {
          e.stopPropagation();
          if (outfitList) {
            const outfitItemsFilter = outfitItems.filter(
              (outfitItem) => outfitItem.product.id !== item.product.id,
            );
            setOutfitItems(outfitItemsFilter);
            localStorage.setItem('outfitItems', JSON.stringify(outfitItemsFilter));
          } else {
            comparisonModalClickHandler();
            setComparisonModalProduct(item);
          }
        }}
      >
        {outfitList ? 'close' : 'star'}
      </button>
    </div>
  );
}

ItemCard.propTypes = {
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
  }).isRequired,
  setOutfitItems: PropTypes.func,
  outfitList: PropTypes.bool,
  get outfitItems() {
    return PropTypes.arrayOf(this.item);
  },
};

ItemCard.defaultProps = {
  outfitList: false,
  outfitItems: [],
  setOutfitItems: () => { },
};
