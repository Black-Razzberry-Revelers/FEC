import React from 'react';

export default function Thumbnail({ image, setDisplay }) {

  const handleClick = (e) => {
    e.preventDefault();
    setDisplay(image.url);
  }

  return (
    <img data-testid="thumbnail" onClick={handleClick} className="thumbnail" alt="circle" src={image.thumbnail_url} />
  );
}
