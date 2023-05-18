import React, { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import ItemCard from './ItemCard';
// import { currentItem, relatedItems } from './exampleData';
import { requests } from '../../requests';
import { styleContext } from '../../App';

export default function RelatedItemsList() {
  const { product } = useContext(styleContext);
  const [activeIndex, setActiveIndex] = useState(0);
  const [relatedItems, setRelatedItems] = useState({ products: [], styles: [], meta: [] });

  useEffect(() => {
    let ignore = false;
    requests.get.related(product.id)
      .then((result) => {
        // console.log('Current Product', currentProduct);
        // console.log('Related Items Data', result.data);
        if (!ignore) {
          setRelatedItems(result.data);
        }
      });
    return () => {
      ignore = true;
    };
  }, [product]);

  return (
    <div className="related-items carousel">
      <h2>Related Items List</h2>
      <div className="related-items list inner" style={{ transform: `translateX(-${activeIndex * 33}%)` }}>
        {relatedItems.products.map((item, i) => (
          <div className="related-items carousel-item item-card" key={item.id}>
            <ItemCard
              key={item.id}
              item={{
                product: item,
                styles: relatedItems.styles[i],
                ratings: relatedItems.meta[i].ratings,
              }}
              outfitList={false}
            />
          </div>
        ))}
      </div>
      <button className="arrow-nav" type="button" hidden={activeIndex === 0} onClick={(e) => setActiveIndex(activeIndex - 1)}>{'<'}</button>
      <button className="arrow-nav" type="button" onClick={(e) => setActiveIndex(activeIndex + 1)}>{'>'}</button>
    </div>
  );
}
