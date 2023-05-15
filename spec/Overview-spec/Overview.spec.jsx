import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../../client/src/components/App';
import Overview from '../../client/src/components/Overview';

describe('Overview', () => {
  const { getByRole, getByTestId } = render(<App />);
  const app = getByRole('application');
  const overview = getByTestId('overview');
  const name = getByTestId('productName');

  test('It should be a function', () => {
    expect(typeof Overview).toBe('function');
  });
  test('it should render to the App', () => {
    expect(app).toContainElement(overview);
  });
  test('the Name of the product and category should be visible', () => {
    expect(name).toBeVisible();
    // expect(getByTestId('category').toBeVisible());
  });
  //unmount();
});
