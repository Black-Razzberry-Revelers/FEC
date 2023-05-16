/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import { styleContext } from '../../App';

export default function Description() {
  const { product } = React.useContext(styleContext);

  return (
    product
      ? (
        <div className="descrip">
          <h2>{product.slogan}</h2>
          <p>{product.description}</p>
          <ul>
            {product.features.map((f) => <li key={f.feature}>{f.feature} - {f.value}</li>)}
          </ul>
        </div>
      )
      : <div>loading...</div>
  );
}
