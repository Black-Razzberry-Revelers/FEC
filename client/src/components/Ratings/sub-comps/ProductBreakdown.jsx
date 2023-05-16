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
        (feature) => {
          if (characteristics[feature] !== undefined) {
            return (
              <>
                <div>{feature}</div>
                {console.log(`${(characteristics[feature].value / 5) * 100}%`)}
                <input type="range" min="0" max="100" value={`${(characteristics[feature].value / 5) * 100}`} style={{ width: '100%' }} />
              </>
            );
          }
        },
      )}
    </div>
  );
}

export default ProductBreakdown;
