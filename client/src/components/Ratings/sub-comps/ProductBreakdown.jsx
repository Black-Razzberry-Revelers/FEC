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
                <div style={{ display: 'flex' }}>
                  <div
                    className="before"
                    style={{
                      width: `${(characteristics[feature].value / 5) * 100}%`,
                      backgroundColor: 'gray',
                      height: '10px',
                    }}
                  />
                  <i className="fa-brands fa-hashnode" />
                  <div
                    className="after"
                    style={{
                      width: `${
                        ((5 - characteristics[feature].value) / 5) * 100
                      }%`,
                      backgroundColor: 'gray',
                      height: '10px',
                    }}
                  />
                </div>
              </>
            );
          }
        },
      )}
    </div>
  );
}

export default ProductBreakdown;
