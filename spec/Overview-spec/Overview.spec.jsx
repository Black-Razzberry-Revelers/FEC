import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../../client/src/components/App';
import Overview from '../../client/src/components/Overview';

beforeEach(() => {
});

describe('Overview', () => {
  const { getByRole, getByTestId } = render(<App />);
  const app = getByRole('application');
  const overview = getByTestId('overview');
  const 
  test('Overview should be a function', () => {
    expect(typeof Overview).toBe('function');
  });
  test('it should render to the App', () => {
    expect(app).toContainElement(overview);
  });
});
