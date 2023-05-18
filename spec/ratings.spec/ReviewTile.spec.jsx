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
import ReviewTile from '../../client/src/components/Ratings/sub-comps/ReviewTile';
import proxyReviews from './proxyReviews';
import fetcher from '../../client/src/components/fetcher';

describe('Ratings & Revewis', () => {
  describe('ReviewTile', () => {
    test('it should render the ReviewTile component', () => {
      const ListReviewsSub = proxyReviews.results;
      render(
        ListReviewsSub.map((review, i) => (
          <ReviewTile review={review} key={`${i}review.spec`} />
        )),
      );
    });

    beforeEach(() => {
      const ListReviewsSub = proxyReviews.results;
      render(
        ListReviewsSub.map((review, i) => (
          <ReviewTile review={review} key={`${i}review.spec`} />
        )),
      );
    });

    test('it should be a function', () => {
      expect(typeof ReviewTile).toBe('function');
    });

    test('it should render the ProductBreakdown component', () => {
      const ListReviewsSub = proxyReviews.results;
      ListReviewsSub.forEach((review) => {
        const reviewerNameElement = screen.getByText(review.reviewer_name);
        expect(reviewerNameElement).toBeInTheDocument();
      });
    });
  });
});
