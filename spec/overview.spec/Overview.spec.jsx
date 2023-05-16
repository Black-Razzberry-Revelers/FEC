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
import AddToCart from '../../client/src/components/Overview/addToCart';

import { requests } from '../../client/src/components/requests';
import fetcher from '../../client/src/components/fetcher';
import {
  productMock,
  stylesMock,
  styleMock,
  metaMock,
  sizesMock,
} from '../mockData';

describe('Overview', () => {
  const style = styleMock;
  const product = productMock;
  const styles = stylesMock;
  beforeEach(() => {
    render(
      <styleContext.Provider value={{ style, styles, product }}>
        <Overview />
      </styleContext.Provider>,
    );
  });

  afterEach(() => {
    cleanup();
  });

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
  const mockGallery = styleMock.photos;
  const mockDisplay = styleMock.photos[0];

  beforeEach(async () => {
    render(<Gallery gallery={mockGallery} display={mockDisplay} setDisplay={mockSetDisplay} />);
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
    await fireEvent.click(thumbnail[1]);
    expect(mockSetDisplay).toHaveBeenCalled();
  });

  test('there should be two buttons to change the image', async () => {
    const buttons = await screen.findAllByRole('button');
    expect(buttons.length).toBe(2);

    const buttonUP = buttons[0];
    await fireEvent.click(buttonUP);
    expect(mockSetDisplay).toHaveBeenCalled();

    const buttonDown = buttons[1];
    await fireEvent.click(buttonDown);
    expect(mockSetDisplay).toHaveBeenCalled();
  });
});

describe('Styleselect', () => {
  const setStyle = jest.fn();
  beforeEach(async () => {
    render(
      <styleContext.Provider value={{ setStyle }}>
        <StyleSelect styles={stylesMock} />
      </styleContext.Provider>,
    );
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

  test('each style option should be a button', async () => {
    const styleSelectors = await screen.findAllByRole('button');
    expect(styleSelectors.length).toBe(6);
  });

  test('the buttons should have a click handler', async () => {
    const styleSelectors = await screen.findAllByRole('button');
    const clicked = await fireEvent.click(styleSelectors[3]);
    expect(clicked).toBeTruthy();
    expect(setStyle).toHaveBeenCalled();
  });
});

describe('ProductInfo', () => {
  beforeEach(async () => {
    const style = styleMock;
    const product = productMock;
    render(
      <styleContext.Provider value={{ style, product }}>
        <ProductInfo />
      </styleContext.Provider>,
    );
    await screen.findByRole('main');
  });

  afterEach(() => {
    cleanup();
  });

  test('it renders the mock price', async () => {
    const mockPrice = await screen.findByText(styleMock.original_price, { exact: true });
    expect(mockPrice).toBeVisible();
  });

  test('it should display the product\'s slogan', async () => {
    const slogan = await screen.findByText(productMock.slogan, { exact: true });
    expect(slogan).toBeVisible();
  });

  test('there should be a description of the product visible', async () => {
    const description = await screen.getByTestId('description');
    expect(description).toBeVisible();
  });

  test('there should be a share button', async () => {
    const button = await screen.findByText('share', { exact: true });
    expect(button).toBeVisible();
  });

  test(`when the share button is clicked,
    options for 'where to share' should be rendered`, async () => {
    const button = await screen.findByText('share', { exact: true });
    await fireEvent.click(button);
    const popUp = await screen.findByText('Share this product', { exact: true });
    expect(popUp).toBeVisible();
  });
});

describe('AddToCart', () => {
  beforeEach(async () => {
    const style = styleMock;
    const product = productMock;
    render(
      <styleContext.Provider value={{ style, product }}>
        <AddToCart sizes={sizesMock} />
      </styleContext.Provider>,
    );
  });

  afterEach(() => {
    cleanup();
  });

  test('theres should be an addToCart button', async () => {
    const button = await screen.findByRole('button');
    expect(button).toBeVisible();
  });

  test('when the button is clicked a form should appear', async () => {
    const button = await screen.findByRole('button');
    await fireEvent.click(button);
    expect(await screen.findByTestId('form')).toBeVisible();
  });

  test('The form should have two select dropdowns and a submit button', async () => {
    const button = await screen.findByRole('button');
    await fireEvent.click(button);
    const dropDowns = await screen.findAllByTestId('select');
    expect(dropDowns.length).toBe(2);
    expect(await screen.getByText('Add', { exact: false })).toBeVisible();
  });
  test('the form should have a submit button', async () => {
    const button = await screen.findByRole('button');
    await fireEvent.click(button);

    const form = await screen.findByTestId('form');
    const add = await screen.getByText('Add', { exact: false });
    expect(add).toHaveAttribute('type', 'submit');

    const submit = await fireEvent.click(add);
    expect(submit).toBeTruthy();
  });
});
