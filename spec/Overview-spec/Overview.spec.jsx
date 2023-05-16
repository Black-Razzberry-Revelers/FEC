import React from 'react';
import 'jest-environment-jsdom';
import '@testing-library/jest-dom';
import {
  render, screen, fireEvent, cleanup,
} from '@testing-library/react';

import App from '../../client/src/components/App';
import Overview from '../../client/src/components/Overview';
import Gallery from '../../client/src/components/Overview/Gallery';

import { product, styles } from './mockData';

describe('Overview', () => {
  beforeEach(async () => {
    render(<App />);
    await screen.findByRole('application');
  });

  afterEach(() => {
    cleanup();
  });

  // test('OverView should render', async () => {
  //   // jest.mock('../../client/src/components/Overview', () => ({
  //   //   Overview: () => <mock-overview data-testid="testOV" />,
  //   // }));
  //   render(<Overview product={product} />);
  //   expect(await screen.findByTestId('overview')).toBeInTheDocument();
  // });

  test('It should be a function', () => {
    expect(typeof Overview).toBe('function');
  });

  test('it should render to the App', async () => {
    const overview = await screen.findByTestId('overview');
    expect(overview).toBeInTheDocument();
  });

  test('the name of the product and the category should be visible', async () => {
    const name = await screen.findByTestId('productName');
    const category = screen.getByTestId('category');
    expect(name).toBeVisible();
    expect(category).toBeVisible();
  });

  test('there should be an image Gallery', async () => {
    const gallery = await screen.findByTestId('gallery');
    expect(gallery).toBeInTheDocument();
  });
});

describe('Gallery', () => {
  beforeEach(async () => {
    const mock = [{ url: 'someUrl', thumbnail: 'example' }];
    const disp = { url: 'aLegitURL' };
    render(<Gallery gallery={mock} display={disp} />);
    await screen.findByRole('main');
  });

  afterEach(() => {
    cleanup();
  });

  test('it should display an image of the product to the user', async () => {
    const image = await screen.getByTestId('productImage');
    expect(image).toBeVisible();
  });
  test('there should be thumbnails and a product image', async () => {
    const images = await screen.findAllByRole('img');
    expect(images.length).toBe(2);
    console.log('images', images[0]);
  });
});
