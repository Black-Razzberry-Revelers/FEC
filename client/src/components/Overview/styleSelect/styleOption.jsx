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
      type="button"
      onClick={handleClick}
      data-testid="thumbnail"
      className="option"
      style={{ padding: 'unset', borderRadius: '50%' }}
    >
      <img
        style={styleInfo.style_id === style.style_id
          ? {
            border: '2px solid var(--light-alt)',
            boxShadow: '0 0 15px var(--light-alt)',
            padding: 'unset',
            borderRadius: '50%',
            borderWidth: '.25px',
          }
          : { padding: 'unset', borderRadius: '50%' }}
        className="thumbnail"
        alt="circle"
        src={styleInfo.photos[0].thumbnail_url}
      />
    </button>
  );
}
