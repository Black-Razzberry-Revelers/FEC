import React from 'react';
import { styleContext } from '../../App';

export default function StyleOption({ styleInfo }) {
  const { style, setStyle } = React.useContext(styleContext);
  const handleClick = () => {
    setStyle(styleInfo);
  };

  return (
    <button
      {styleInfo.id ==== style.id
        ? style = {{}}

      }
      style={{ padding: 'unset', borderRadius: '8px', borderWidth: '.25px' }}
      type="button"
      onClick={handleClick}
      data-testid="thumbnail"
      className="option"
    >
      <img
        className="thumbnail"
        style={{ padding: 'unset', borderRadius: '8px', borderWidth: '.25px' }}
        alt="circle"
        src={styleInfo.photos[0].thumbnail_url}
      />
    </button>
  );
}
