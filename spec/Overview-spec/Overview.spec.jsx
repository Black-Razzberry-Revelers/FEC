import React from 'react';
import 'jest-environment-jsdom';
import '@testing-library/jest-dom';
import {
  render, screen, fireEvent, cleanup,
} from '@testing-library/react';

import App, { styleContext } from '../../client/src/components/App';
import Overview from '../../client/src/components/Overview';
import Gallery from '../../client/src/components/Overview/Gallery';
import StyleSelect from '../../client/src/components/Overview/styleSelect';
import ProductInfo from '../../client/src/components/Overview/productInfo';

import { product, styles, style } from './mockData';


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
    const category = await screen.getByTestId('category');
    expect(name).toBeVisible();
    expect(category).toBeVisible();
  });

  test('there should be an image Gallery', async () => {
    const gallery = await screen.findByTestId('gallery');
    expect(gallery).toBeInTheDocument();
  });
});

describe('Gallery', () => {
  const mockSetDisplay = jest.fn();
  const mockGallery = style.photos;
  const mockDisp = style.photos[0];

  beforeEach(async () => {
    render(<Gallery gallery={mockGallery} display={mockDisp} setDisplay={mockSetDisplay} />);
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
    expect(images.length).toBe(7);
  });

  test('when thumbnail clicked should change display', async () => {
    const thumbnail = await screen.getAllByTestId('thumbnail');
    const mock = mockSetDisplay;
    await fireEvent.click(thumbnail[1]);
    expect(mockSetDisplay).toHaveBeenCalled();
  });
});

describe('Styleselect', () => {
  const mockStyles = styles;
  const mockStyle = style;
  beforeEach(async () => {
    render(<StyleSelect styles={mockStyles} />);
    await screen.findByRole('main');
  });

  afterEach(() => {
    cleanup();
  });

  test('it should display the stylenames', async () => {
    const mockOptions = await screen.findAllByRole('button');
    const styleText = await screen.findByText('Forest', { exact: false });

    expect(mockOptions.length).toBe(6);
    expect(styleText).toBeDefined();
  });

  xtest('', async () => {

  });
});

describe('ProductInfo', () => {
  const mockProduct = product;

  // jest.mock(
  //   '../../client/src/components/Overview/productInfo/price',
  //   () => function mockPrice() {
  //     return <div>Mocked Price $0</div>;
  //   },
  // );

  beforeEach(async () => {
    render(
      <styleContext.Provider value={{ style }}>
        <ProductInfo product={mockProduct} />
      </styleContext.Provider>,
    );
    await screen.findByRole('main');
  });

  afterEach(() => {
    cleanup();
  });

  test('it renders the mock price', async () => {
    const mockStyle = style;
    const mockPrice = await screen.findByText(mockStyle.original_price, { exact: true });
    expect(mockPrice).toBeVisible();
  });

  test('it should display the product\'s slogan', async () => {
    const slogan = await screen.findByText(mockProduct.slogan, { exact: true });
    expect(slogan).toBeVisible();
  });
});
