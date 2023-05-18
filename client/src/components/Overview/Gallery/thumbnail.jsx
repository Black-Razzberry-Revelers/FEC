/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';

export default function Thumbnail({ image, display, setDisplay }) {
  const handleClick = (e) => {
    e.preventDefault();
    setDisplay(image);
  };

  return (
    <button
      style={image === display
        ? { boxShadow: '0 0 10px blue',
          padding: 'unset', borderRadius: '8px', borderWidth: '.25px' }
        : { padding: 'unset', borderRadius: '8px', borderWidth: '.25px' }}
      type="button"
      onClick={handleClick}
      data-testid="thumbnail"
    >
      <img
        className="thumbnail img-thumbnail"
        style={{ padding: 'unset', borderRadius: '8px', borderWidth: '.25px' }}
        alt="circle"
        src={image.thumbnail_url}
      />
    </button>
  );
}
