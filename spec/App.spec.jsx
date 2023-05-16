import React from 'react';
import axios from 'axios';
import 'jest-environment-jsdom';
import '@testing-library/jest-dom';
import {
  render, screen, fireEvent, cleanup,
} from '@testing-library/react';

import App, { styleContext } from '../client/src/components/App';
import Overview from '../client/src/components/Overview';
import Ratings from '../client/src/components/Ratings/Ratings';
import Related from '../client/src/components/Related/Related';
import Questions from '../client/src/components/Questions/Questions';

import { requests } from '../client/src/components/requests';
import fetcher from '../client/src/components/fetcher';
import {
  productMock,
  stylesMock,
  styleMock,
  metaMock,
  reviewsMock,
  reviewsMetaMock,
  relatedMock,
  questionsMock,
} from './mockData';

jest.mock('../client/src/components/fetcher');
jest.mock('../client/src/components/requests');
jest.mock('../client/src/components/Overview', () => function mockRelated() {
  return <div role="region">overview</div>;
});
jest.mock('../client/src/components/Related/Related', () => function mockRelated() {
  return <div role="region">related</div>;
});
jest.mock('../client/src/components/Questions/Questions', () => function mockQuestions() {
  return <div role="region">question</div>;
});
jest.mock('../client/src/components/Ratings/Ratings', () => function mockRatings() {
  return <div role="region">ratings</div>;
});

describe('App', () => {
  requests.get.product.mockResolvedValue({
    data: [{
      product: productMock,
      styles: stylesMock,
    }],
  });
  requests.get.meta.mockResolvedValue({
    data: [metaMock],
  });
  requests.get.related.mockResolvedValue({
    data: [relatedMock],
  });
  requests.get.questions.mockResolvedValue({
    data: [questionsMock],
  });
  fetcher.getReviewsMetadata.mockResolvedValue({
    data: [reviewsMetaMock],
  });
  fetcher.getListReviews.mockResolvedValue({
    data: [reviewsMock],
  });

  beforeEach(async () => {
    render(<App />);
    await screen.findByRole('application');
  });

  afterEach(() => {
    cleanup();
  });

  test('The components should be functions', () => {
    expect(typeof Overview).toBe('function');
    expect(typeof Questions).toBe('function');
    expect(typeof Ratings).toBe('function');
    expect(typeof Overview).toBe('function');
  });

  test('The App should render to the body', async () => {
    expect(await screen.findByRole('application')).toBeInTheDocument();
  });

  test('The widgets should render to the App', async () => {
    const widgets = await screen.findAllByRole('region');
    expect(widgets.length).toBe(4);
  });
});
