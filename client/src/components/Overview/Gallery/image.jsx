import React from 'react';

export default function Image({ display }) {
  return (
    <div className="imageContainer">
      <img data-testid="productImage" className="productImage" alt="main" src={display.url} />
    </div>
  );
}
