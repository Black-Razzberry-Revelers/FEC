import React from 'react';
import StyleOption from './styleOption';

export default function StyleSelect({ styles }) {
  return (
    <div className="styles">
      {styles.map((styleInfo) => <StyleOption key={styleInfo.style_id} styleInfo={styleInfo} />)}
    </div>
  );
}
