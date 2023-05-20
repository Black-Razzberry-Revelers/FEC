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
      type="button"
      onClick={handleClick}
      data-testid="thumbnail"
      style={{ padding: 'unset', borderRadius: '8px' }}
    >
      <img
        style={image === display
          ? {
            border: '3px solid var(--dark-alt)',
            boxShadow: '0 0 10px var(--dark-alt)',
            padding: 'unset',
            borderRadius: '8px',
            borderWidth: '.25px',
          }
          : { padding: 'unset', borderRadius: '8px' }}
        className="thumbnail img-thumbnail"
        alt="circle"
        src={image.thumbnail_url}
      />
    </button>
  );
}
