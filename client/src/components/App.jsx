import React from 'react';
import RelatedItemsSection from './Related/Related';
import Overview from './Overview';
import Questions from './Questions/Questions';
import findAvgRating from '../calculateAvgRating';
import { requests } from './requests';
import { productsData, productData, stylesData } from './mockData';

export const styleContext = React.createContext(null);

export default function App() {
  const [product, setProduct] = React.useState(productData);
  const [avgRating, setAvgRating] = React.useState(3.8); // hardcoded for now. change later
  const [styles, setStyles] = React.useState(stylesData.results);
  const [style, setStyle] = React.useState({});

  React.useEffect(() => {
    requests.get.product()
      .then((results) => {
        setProduct(results.data.product);
        setStyles(results.data.styles.results);
        styles.forEach((option, i) => {
          if (option['default?']) {
            const defaultStyle = option;
            defaultStyle.index = i;
            setStyle(defaultStyle);
          }
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="body">
      <h1>product page</h1>
      <div>
        our components go here
        <styleContext.Provider value={{ style, setStyle, styles, setStyles }}>
          <Overview avgRating={avgRating} product={product} />
          <RelatedItemsSection />
          <Questions />
        </styleContext.Provider>
      </div>
    </div>
  );
}
