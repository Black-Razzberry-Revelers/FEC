/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import { styleContext } from '../../App';

export default function Description() {
  const { product } = React.useContext(styleContext);

  return (
    <div data-testid="description">
      {product ? (
        <div className="descrip">
          <div>
            <p className="sub-head">{product.slogan}</p>
            <p className="info-text text-description">{product.description}</p>
          </div>

          <ul className="info-text">
            {product.features.map((f) => (
              <li key={f.feature}>
                {f.feature} - {f.value}
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div>loading...</div>
      )}
    </div>
  );
}
