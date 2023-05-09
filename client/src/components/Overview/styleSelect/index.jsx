import React from 'react';
import Style from './style';

export default function StyleSelect({ styles }) {
  return (
    <div className="styles">
      {styles.map((styleInfo) => <Style key={styleInfo.style_id} styleInfo={styleInfo} />)}
    </div>
  );
}
