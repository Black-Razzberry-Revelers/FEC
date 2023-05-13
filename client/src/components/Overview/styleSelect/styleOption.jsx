import React from 'react';
import { styleContext } from '../../App';

export default function StyleOption({ styleInfo }) {
  const { style, setStyle } = React.useContext(styleContext);
  const handleClick = () => {
    setStyle(styleInfo);
  };

  return (
    <button type="button" className="option" onClick={handleClick}>
      {styleInfo.name}
    </button>
  );
}
