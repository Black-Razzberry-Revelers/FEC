import React from 'react';

export default function Description({ product }) {
  return (
    <div className="descrip">
      <h2>{product.slogan}</h2>
      <p>{product.description}</p>
      <ul>
        {product.features.map((feat) => <li key={feat.feature} >{feat.feature} - {feat.value}</li>)}
      </ul>
    </div>
  );
}
