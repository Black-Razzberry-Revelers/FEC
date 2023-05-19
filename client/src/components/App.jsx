/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable import/no-cycle */
import React from 'react';
import RelatedItemsSection from './Related/Related';
import Overview from './Overview';
import Questions from './Questions/Questions';
import Ratings from './Ratings/Ratings';
import ComparisonModal from './Related/subcomponents/ComparisonModal';
import findAvgRating from '../calculateAvgRating';
import { requests } from './requests';

export const styleContext = React.createContext({});
// export const starsContext = React.createContext(null);

export default function App() {
  const [product, setProduct] = React.useState({ features: [] });
  const [avgRating, setAvgRating] = React.useState(0);
  const [styles, setStyles] = React.useState({});
  const [style, setStyle] = React.useState({});
  const [comparisonModalProduct, setComparisonModalProduct] = React.useState(
    { product: { features: [] } },
  );

  React.useEffect(() => {
    requests.get
      .product()
      .then((results) => {
        const stylesArr = results.data.styles.results;
        setProduct(results.data.product);
        setStyles(results.data.styles);
        let defaultFound = false;
        stylesArr.forEach((option, i) => {
          if (option['default?']) {
            const defaultStyle = option;
            defaultStyle.index = i;
            setStyle(defaultStyle);
            defaultFound = true;
          }
        });
        if (!defaultFound) {
          setStyle(stylesArr[0]);
        }
      })
      .catch((err) => {
        console.log(err);
      });
    requests.get
      .meta()
      .then((results) => {
        setAvgRating(findAvgRating(results.data.ratings));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function comparisonModalClickHandler(selector = '.comparison-modal') {
    const nodes = document.querySelectorAll(selector);
    for (let i = 0; i < nodes.length; i += 1) {
      nodes[i].hidden = !nodes[i].hidden;
    }
  }

  return (
    <div className="body" role="application">
      <div>
        <styleContext.Provider
          value={{
            style,
            setStyle,
            styles,
            setStyles,
            product,
            setProduct,
            avgRating,
            comparisonModalClickHandler,
            setComparisonModalProduct,
          }}
        >
          <Overview avgRating={avgRating} />
          <RelatedItemsSection currentProduct={product} setProduct={setProduct} />
          <Questions />
          <Ratings />
          <ComparisonModal item={comparisonModalProduct} />
        </styleContext.Provider>
      </div>
    </div>
  );
}
