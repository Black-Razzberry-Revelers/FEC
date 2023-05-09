import React from 'react';

export default function Description({ product }) {
  return (
    <>
      <h2>{product.slogan}</h2>
      <p>{product.description}</p>
      <ul>
        {product.features.map((feat) => <li>{feat.feature} - {feat.value}</li>)}
      </ul>
    </>
  );
}
