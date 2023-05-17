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
import Characteristics from '../../client/src/components/Ratings/sub-comps/sub-write-review/Characteristics';
import proxyReviews from './proxyReviews';
import fetcher from '../../client/src/components/fetcher';

describe('Ratings & Revewis', () => {
  describe('Characteristics', () => {
    test('it should render the Characteristics component', () => {
      const mocksetPerson = jest.fn();
      const metaDataSub = proxyReviews.metaData;
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

      render(
        <Characteristics
          person={mockPerson}
          setPerson={mocksetPerson}
          metaData={metaDataSub}
        />,
      );
    });

    beforeEach(() => {
      const mocksetPerson = jest.fn();
      const metaDataSub = proxyReviews.metaData;
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

      render(
        <Characteristics
          person={mockPerson}
          setPerson={mocksetPerson}
          metaData={metaDataSub}
        />,
      );
    });

    test('it should be a function', () => {
      expect(typeof Characteristics).toBe('function');
    });

    // test('has radio buttons', () => {

    // });
  });
});
