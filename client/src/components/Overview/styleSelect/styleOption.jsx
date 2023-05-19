import React from 'react';
import { styleContext } from '../../App';

export default function StyleOption({ styleInfo }) {
  const { style, setStyle } = React.useContext(styleContext);
  const handleClick = () => {
    setStyle(styleInfo);
  };

  return (
    <button
      id={style.style_id}
      style={styleInfo.style_id === style.style_id
        ? {
          boxShadow: '-5px -5px blue',
          padding: 'unset',
          borderRadius: '50%',
          borderWidth: '.25px',
        }
        : { padding: 'unset', borderRadius: '50%', borderWidth: '.25px' }}
      type="button"
      onClick={handleClick}
      data-testid="thumbnail"
      className="option"
    >
      <img
        className="thumbnail"
        style={{ padding: 'unset', borderRadius: '50%', borderWidth: '.25px' }}
        alt="circle"
        src={styleInfo.photos[0].thumbnail_url}
      />
    </button>
  );
}
