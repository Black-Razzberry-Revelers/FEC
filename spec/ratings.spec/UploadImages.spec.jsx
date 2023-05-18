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
import UploadImages from '../../client/src/components/Ratings/sub-comps/sub-write-review/UploadImages';
import proxyReviews from './proxyReviews';
import fetcher from '../../client/src/components/fetcher';

describe('Ratings & Revewis', () => {
  describe('UploadImages', () => {
    test('it should render the UploadImages component', () => {
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

      render(<UploadImages person={mockPerson} setPerson={mocksetPerson} />);
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

      render(<UploadImages person={mockPerson} setPerson={mocksetPerson} />);
    });

    test('it should be a function', () => {
      expect(typeof UploadImages).toBe('function');
    });

    // test('has radio buttons', () => {

    // });
  });
});
