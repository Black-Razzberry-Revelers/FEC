import React from 'react';
import Overview from './Overview';

import { productsData, productData, stylesData } from './Overview/mockData';

export default function App(props) {

  const [styles, setStyles] = React.useState([]);
  const [style, setStyle] = React.useState({});

  React.useEffect(() => {
    // GET
    setStyles(stylesData.results);
    console.log('rendering')
    styles.forEach((option, i) => {
      option.index = i;
      if (option['default?']) {
        setStyle(option);
        console.log('style set', style);
      }
    });
  }, []);

  return (
    <div className="body">
      <h1>product page</h1>
      <div>
        our components go here
        <Overview style={style} setStyle={setStyle} />
      </div>
    </div>
  );
}
