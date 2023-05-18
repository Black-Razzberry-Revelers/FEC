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
import Ratings from '../../client/src/components/Ratings/Ratings';

describe('Ratings & Revewis', () => {
  test('it should render the Ratings component', async () => {
    function TestComponent() {
      const [currentProduct, setCurrentProduct] = useState(40344);
      return <Ratings />;
    }
    await act(async () => {
      expect(typeof Ratings).toBe('function');
      render(<TestComponent />);
    });
  });
});
