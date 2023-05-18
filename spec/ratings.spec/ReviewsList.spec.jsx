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
import ReviewsList from '../../client/src/components/Ratings/sub-comps/ReviewsList';
import proxyReviews from './proxyReviews';
import fetcher from '../../client/src/components/fetcher';

describe('Ratings & Revewis', () => {
  describe('ReviewsList', () => {
    test('it should render the ReviewsList component', () => {
      const ListReviewsSub = proxyReviews.results;
      render(
        <ReviewsList
          reviews={ListReviewsSub}
          filters={[]}
          moreReviews={false}
        />,
      );
    });

    beforeEach(() => {
      const ListReviewsSub = proxyReviews.results;
      render(<ReviewsList
        reviews={ListReviewsSub}
        filters={[]}
        moreReviews={false}
      />);
    });

    it('it should be a function', () => {
      expect(typeof ReviewsList).toBe('function');
    });

    // test('triggers handleScroll function on scroll event', () => {
    //   const container = screen.getByRole('div', { name: '' });
    //   fireEvent.scroll(container, { target: { scrollTop: 100 } });
    // });
  });
});
