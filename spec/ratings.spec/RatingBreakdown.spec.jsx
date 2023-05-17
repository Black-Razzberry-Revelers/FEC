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
import RatingBreakdown from '../../client/src/components/Ratings/sub-comps/RatingBreakdown';
import proxyReviews from './proxyReviews';
import fetcher from '../../client/src/components/fetcher';

describe('Ratings & Revewis', () => {
  describe('RatingBreakdown', () => {
    test('it should render the RatingBreakdown component', () => {
      const mockSetFilters = jest.fn();
      const metaDataSub = proxyReviews.metaData;
      render(
        <RatingBreakdown
          metaData={metaDataSub}
          filters={[]}
          setFilters={mockSetFilters}
        />,
      );
    });

    beforeEach(() => {
      const mockSetFilters = jest.fn();
      const metaDataSub = proxyReviews.metaData;
      render(
        <RatingBreakdown
          metaData={metaDataSub}
          filters={[]}
          setFilters={mockSetFilters}
        />,
      );
    });

    it('it should be a function', () => {
      expect(typeof RatingBreakdown).toBe('function');
    });

    // it('it should render the word "Stars"', async () => {
    //   const element = await screen.getAllByText('/Stars/i');
    //   expect(element.length).toBeGreaterThan(0);
    // });

    // it('it should call setFilters when click button', async () => {
    //   const mockSetFilters = jest.fn();
    //   const button = await screen.findByRole('button');
    //   await fireEvent.click(button);
    //   expect(mockSetFilters).toHaveBeenCalled();
    // });

    // it('it should render every bar with a onClick on it', (() => {
    //   const ratingsSub = proxyReviews.metaData.ratings;
    //   const barElement = screen.getAllByRole('button', { name: /stars/i });
    //   barElement.forEach((bar) => {
    //     fireEvent.click(bar);
    //     expect(mockSetFilters).toHaveBeenCalled();
    //     mockSetFilters.mockClear();
    //   });
    // }));
  });
});
