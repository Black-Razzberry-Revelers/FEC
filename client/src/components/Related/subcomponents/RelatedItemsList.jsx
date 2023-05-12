import React, { useState, useEffect, useContext } from 'react';
import ItemCard from './ItemCard';
// import { currentItem, relatedItems } from './exampleData';
import { requests } from '../../requests';
import { styleContext } from '../../App';

export default function RelatedItemsList({ currentProduct, setProduct }) {
  const {
    style, setStyle, styles, setStyles,
  } = useContext(styleContext);
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
    return () => {
      ignore = true;
    };
  }, [currentProduct]);

  return (
    <div className="related-items carousel">
      <h2>Related Items List</h2>
      <div className="related-items list inner" style={{ transform: `translateX(-${activeIndex * 33}%)` }}>
        {relatedItems.products.map((item, i) => (
          <div className="related-items carousel-item item-card" key={item.id} onClick={(e) => {
            setProduct(item);
            // console.log('Item:', item);
            setStyles(relatedItems.styles[i].results);
            // console.log('Style:', relatedItems.styles[i].results)
            const newDefaultStyle = relatedItems.styles[i].results.filter((style) => style['default?'])[0];
            console.log('Related Item Default Style:', newDefaultStyle);
            setStyle(newDefaultStyle);
          }}>
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
