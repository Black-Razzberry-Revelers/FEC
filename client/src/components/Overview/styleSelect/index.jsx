/* eslint-disable implicit-arrow-linebreak */
import React from 'react';
import StyleOption from './styleOption';

export default function StyleSelect({ styles }) {
  return (
    <>
      <p>
        Available in these styles!
      </p>
      <div role="main" className="styles">
        {styles.results
          ? styles.results.map((styleInfo) =>
            <StyleOption key={styleInfo.style_id} styleInfo={styleInfo} />)
          : <div> loading styles... </div>}
      </div>
    </>
  );
}
