import React, { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import ItemCard from './ItemCard';
// import { currentItem, relatedItems } from './exampleData';
import { requests } from '../../requests';
// import { styleContext } from '../../App';

export default function RelatedItemsList({ currentProduct, setProduct }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [relatedItems, setRelatedItems] = useState({ products: [], styles: [] });

  useEffect(() => {
    let ignore = false;
    requests.get.related(currentProduct.id)
      .then((result) => {
        console.log(result.data);
        if (!ignore) {
          setRelatedItems(result.data);
        }
      });
    requests.get.meta(currentProduct.id)
      .then((result) => {
        if (!ignore) {
          // add ratings calc here
        }
      });
    return () => {
      ignore = true;
    };
  }, [currentProduct]);

  return (
    <div className="related-items carousel">
      <h2>Related Items List</h2>
      <div className="related-items list inner" style={{ transform: `translateX(-${activeIndex * 33}%)` }}>
        {relatedItems.products.map((item, i) => (
          <div className="related-items carousel-item item-card" key={item.id}>
            <ItemCard
              key={item.id}
              item={{ product: item, styles: relatedItems.styles[i].results }}
              outfitList={false}
              setProduct={setProduct}
            />
          </div>
        ))}
      </div>
      <button type="button" hidden={activeIndex === 0} onClick={(e) => setActiveIndex(activeIndex - 1)}>{'<'}</button>
      <button type="button" onClick={(e) => setActiveIndex(activeIndex + 1)}>{'>'}</button>
    </div>
  );
}

RelatedItemsList.propTypes = {
  currentProduct: PropTypes.shape({
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
  }).isRequired,
  setProduct: PropTypes.func.isRequired,
};
