/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';

export default function Thumbnail({ image, setDisplay, key }) {
  const handleClick = (e) => {
    e.preventDefault();
    setDisplay(image.url);
  };

  const handleKeyDown = (e) => {
    e.preventDefault();
    if (e.code === 'Enter') {
      setDisplay(image.url);
    }
  };

  return (
    <img
      tabIndex={key}
      onKeyDown={handleKeyDown}
      data-testid="thumbnail"
      onClick={handleClick}
      className="thumbnail"
      alt="circle"
      src={image.thumbnail_url}
    />
  );
}
