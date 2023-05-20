import React from 'react';

export default function Image({ display }) {
  return (
    <img data-testid="productImage" className="productImage" alt="main" src={display.url} />
  );
}
