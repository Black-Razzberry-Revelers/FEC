/* eslint-disable array-callback-return */
/* eslint-disable consistent-return */
/* eslint-disable react/react-in-jsx-scope */
import { useState } from 'react';
import averageRating from '../../../calculateAvgRating';

function ProductBreakdown({ metaData }) {
  const { characteristics } = metaData;
  return (
    <div>
      {['Size', 'Width', 'Comfort', 'Quality', 'Length', 'Fit'].map(
        (feature, i) => {
          if (characteristics[feature] !== undefined) {
            return (
              <div key={`${i}-${feature}`}>
                {feature}
                <input
                  type="range"
                  min="0"
                  max="100"
                  defaultValue={`${(characteristics[feature].value / 5) * 100}`}
                  style={{ width: '100%' }}
                  key={`${i}-${feature}-${i}`}
                />
              </div>
            );
          }
        },
      )}
    </div>
  );
}

export default ProductBreakdown;
