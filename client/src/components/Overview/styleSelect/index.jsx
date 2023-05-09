import React from 'react';
import Style from './style';

export default function StyleSelect({ styles }) {
  return (
    styles.map((styleInfo) => <Style key={styleInfo.style_id} styleInfo={styleInfo} />)
  );
}
