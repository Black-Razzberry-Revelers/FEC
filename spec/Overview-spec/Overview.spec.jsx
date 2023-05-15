import React from 'react';
import RTL from '@testing-library/react';
// import 'jest-environment-jsdom';
import '@testing-library/jest-dom';
import App from '../../client/src/components/App';
import Overview from '../../client/src/components/Overview';

describe('Overview', () => {
  test('It should be a function', () => {
    expect(typeof Overview).toBe('function');
  });
  test('it should render to the App', async () => {
    RTL.render(<App />);

    fireEvent.click(RTL.screen.getByText('Load'));

    const app = await RTL.screen.getByRole('application');
    const overview = await RTL.screen.getByTestId('overview');
    // const name = screen.getByTestId('productName');
    // const category = screen.getByTestId('category');

    expect(app).toContainElement(overview);
  });
  xtest('the Name of the product and category should be visible', async () => {
    RTL.render(<App />);
    const name = await RTL.screen.getByTestId('productName');
    expect(name).toBeVisible();
    // cleanup();
  });
});
