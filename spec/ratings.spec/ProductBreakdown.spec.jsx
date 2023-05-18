/* eslint-disable import/extensions */
import React, { useState } from 'react';
import {
  render,
  screen,
  waitFor,
  act,
  fireEvent,
} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import userEvent from '@testing-library/user-event';
import ProductBreakdown from '../../client/src/components/Ratings/sub-comps/ProductBreakdown';
import proxyReviews from './proxyReviews';
import fetcher from '../../client/src/components/fetcher';

describe('Ratings & Revewis', () => {
  describe('ProductBreakdown', () => {
    test('it should render the ProductBreakdown component', () => {
      const metaDataSub = proxyReviews.metaData;
      render(<ProductBreakdown metaData={metaDataSub} />);
    });

    beforeEach(() => {
      const metaDataSub = proxyReviews.metaData;
      render(<ProductBreakdown metaData={metaDataSub} />);
    });

    it('it should be a function', () => {
      expect(typeof ProductBreakdown).toBe('function');
    });

    test('it should render the ProductBreakdown component', () => {
      const characteristicsSub = proxyReviews.metaData.characteristics;
      const characteristics = [
        'Size',
        'Width',
        'Comfort',
        'Quality',
        'Length',
        'Fit',
      ];
      characteristics.forEach((characteristic) => {
        if (characteristicsSub.characteristic) {
          const inputElement = screen.getByRole('slider', {
            name: characteristic,
          });
          expect(inputElement).toBeInTheDocumnet();
        }
      });
    });
  });

  //    test('updates state when input values change', () => {
  //      const characteristicsSub = proxyReviews.metaData.characteristics;
  //       const updatedMetaData = {
  //         characteristics: {
  //           Fit: {
  //             id: 135224,
  //             value: '3.6885245901639344',
  //           },
  //           Length: {
  //             id: 135225,
  //             value: '4.1457286432160804',
  //           },
  //         },
  //       };

  //      render(<ProductBreakdown metaData={characteristicsSub} />);
  //       const sizeInput = screen.getByRole('slider', { name: 'Size' });
  //       fireEvent.change(sizeInput, { target: { value: '80' } });

  //       render(<ProductBreakdown metaData={updatedMetaData} />);
  //       const updatedSizeInput = screen.getByRole('slider', { name: 'Size' });
//       expect(updatedSizeInput.value).toBe('80');
//    });
});
