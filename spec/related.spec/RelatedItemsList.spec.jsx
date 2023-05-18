import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { currentItem, relatedItems } from './exampleData';
import { requests } from '../../client/src/components/requests';

import RelatedItemsList from '../../client/src/components/Related/subcomponents/RelatedItemsList';

jest.mock('../../client/src/components/requests');
jest.mock(
  '../../client/src/components/Related/subcomponents/ItemCard',
  () => function mockItemCard({ item }) {
    return (
      <div role="mock-item-card">
        <img
          src={item.styles.results[0].photos[0].thumbnail_url}
          alt="mock"
        />
        <div>{`Some Fake Product ${item.product.id}`}</div>
      </div>
    );
  },
);

beforeEach(async () => {
  const setProduct = jest.fn();
  requests.get.related.mockResolvedValue({ data: relatedItems });
  render(<RelatedItemsList currentProduct={currentItem} setProduct={setProduct} />);
  expect(await screen.findAllByText(/Some Fake Product/)).toHaveLength(4);
});

afterEach(() => jest.resetAllMocks());

describe('Related Item List', () => {
  it('should contain ItemCards as children', () => {
    screen.findAllByRole('mock-item-card')
      .then((results) => expect(results).toHaveLength(4));
  });

  it('should reveal left carousel button when right carousel button is clicked', () => {
    const button = screen.getByRole('button', { name: '>' });
    // const itemCards = screen.getAllByRole('mock-item-card');
    expect(screen.getAllByRole('button', { name: /<||>/ })).toHaveLength(1);
    fireEvent.click(button);
    expect(screen.getAllByRole('button', { name: /<||>/ })).toHaveLength(2);
  });
});
