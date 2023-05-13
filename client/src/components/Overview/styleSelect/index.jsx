import React from 'react';
import StyleOption from './styleOption';

export default function StyleSelect({ styles }) {
  return (
    <div className="styles">
      {styles.results
        ? styles.results.map((styleInfo) =>
          <StyleOption key={styleInfo.style_id} styleInfo={styleInfo} />)
        : <div> looading styles... </div>
      }
    </div>
  );
}
