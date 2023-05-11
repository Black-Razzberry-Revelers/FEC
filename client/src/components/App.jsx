import React from 'react';
import RelatedItemsSection from './Related/Related';
import Overview from './Overview';
import Questions from './Questions/Questions';
import findAvgRating from '../calculateAvgRating';
import { requests } from './requests';

export const styleContext = React.createContext(null);
export const starsContext = React.createContext(null);

export default function App() {
  const [product, setProduct] = React.useState({ features: [] });
  const [avgRating, setAvgRating] = React.useState(0); // hardcoded for now. change later
  const [styles, setStyles] = React.useState([]);
  const [style, setStyle] = React.useState({});

  React.useEffect(() => {
    requests.get.product()
      .then((results) => {
        const stylesArr = results.data.styles.results;
        setProduct(results.data.product);
        setStyles(stylesArr);

        stylesArr.forEach((option, i) => {
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
    requests.get.meta()
      .then((results) => {
        setAvgRating(findAvgRating(results.data.ratings));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="body" role="application">
      <h1>product page</h1>
      <div>
        our components go here
        <starsContext.Provider value={{ avgRating, setAvgRating }}>
          <styleContext.Provider value={{ style, setStyle, styles, setStyles }}>
            <Overview data-testid="overview" avgRating={avgRating} product={product} />
            <RelatedItemsSection />
            <Questions />
          </styleContext.Provider>
        </starsContext.Provider>
      </div>
    </div>
  );
}
