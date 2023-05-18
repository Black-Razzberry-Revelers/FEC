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
import FeedbackAndInfo from '../../client/src/components/Ratings/sub-comps/sub-write-review/FeedbackAndInfo';
import proxyReviews from './proxyReviews';
import fetcher from '../../client/src/components/fetcher';

describe('Ratings & Revewis', () => {
  describe('FeedbackAndInfo', () => {
    test('it should render the FeedbackAndInfo component', () => {
      const mocksetPerson = jest.fn();
      const mockPerson = {
        product_id: 40345,
        rating: 0,
        recommend: true,
        summary: '',
        body: '',
        nickname: '',
        email: '',
        characteristics: {},
        photos: [],
      };

      render(<FeedbackAndInfo person={mockPerson} setPerson={mocksetPerson} />);
    });

    beforeEach(() => {
      const mocksetPerson = jest.fn();
      const mockPerson = {
        product_id: 40345,
        rating: 0,
        recommend: true,
        summary: '',
        body: '',
        nickname: '',
        email: '',
        characteristics: {},
        photos: [],
      };

      render(<FeedbackAndInfo person={mockPerson} setPerson={mocksetPerson} />);
    });

    test('it should be a function', () => {
      expect(typeof FeedbackAndInfo).toBe('function');
    });

    // test('has radio buttons', () => {

    // });
  });
});
