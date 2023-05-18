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
import WriteNewReview from '../../client/src/components/Ratings/sub-comps/WriteNewReview';
import proxyReviews from './proxyReviews';
import fetcher from '../../client/src/components/fetcher';

describe('Ratings & Revewis', () => {
  describe('WriteNewReview', () => {
    test('it should render the WriteNewReview component', () => {
      const metaDataSub = proxyReviews.metaData;
      const mockSetWriteReview = jest.fn();

      render(
        <WriteNewReview
          writeReview={false}
          setWriteReview={mockSetWriteReview}
          metaData={metaDataSub}
        />,
      );
    });

    beforeEach(() => {
      const metaDataSub = proxyReviews.metaData;
      const mockSetWriteReview = jest.fn();

      render(
        <WriteNewReview
          writeReview={false}
          setWriteReview={mockSetWriteReview}
          metaData={metaDataSub}
        />,
      );
    });

    test('it should be a function', () => {
      expect(typeof WriteNewReview).toBe('function');
    });

    test('has radio buttons', () => {
      const radioButton = screen.getAllByRole('radio');
      expect(radioButton).toHaveLength(22);
    });

    // test('it should setPerson on click', async () => {
    //   const mocksetPerson = jest.fn();
    //   const radioButton = screen.getAllByRole('radio');
    //   await fireEvent.click(radioButton[0]);
    //   expect(mocksetPerson).toHaveBeenCalled();
    // });
  });
});
