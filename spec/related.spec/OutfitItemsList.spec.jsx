import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { currentItem, relatedItems } from './exampleData';

import OutfitItemsList from '../../client/src/components/Related/subcomponents/OutfitItemsList';

jest.mock(
  '../../client/src/components/Related/subcomponents/ItemCard',
  () => function mockItemCard({ item, outfitList }) {
    return (
      <div role="mock-item-card">
        {/* <img
          src={item.styles.results[0].photos[0].thumbnail_url}
          alt="mock"
        /> */}
        <div>{`Some Fake Product ${item.product.id}`}</div>
      </div>
    );
  },
);

const styleContext = React.createContext(null);

beforeEach(() => {
  const setProduct = jest.fn();
  const { styles } = currentItem;
  render(
    <styleContext.Provider value={styles}>
      <OutfitItemsList currentProduct={currentItem.product} setProduct={setProduct} />
    </styleContext.Provider>,
  );
});

afterEach(() => jest.resetAllMocks());

describe('Outfit Item List', () => {
  it('should add the currentItem as an ItemCard when the + button is clicked', async () => {
    const button = screen.getByRole('button', { name: '+' });
    expect(screen.queryByRole('mock-item-card')).toBeNull();
    fireEvent.click(button);
    expect(await screen.findAllByRole('mock-item-card')).toHaveLength(1);
  });

  it('should reveal the left carousel button when the right carousel button is clicked', () => {
    const rightButton = screen.getByRole('button', { name: '>' });
    expect(rightButton).toBeVisible();
    expect(screen.queryByRole('button', { name: '<' })).toBeNull();
    fireEvent.click(rightButton);
    expect(screen.getByRole('button', { name: '<' })).toBeVisible();
  });

  it('should hide the left carousel button when the activeIndex equals 0', () => {
    const rightButton = screen.getByRole('button', { name: '>' });
    expect(rightButton).toBeVisible();
    expect(screen.queryByRole('button', { name: '<' })).toBeNull();
    fireEvent.click(rightButton);
    expect(screen.getByRole('button', { name: '<' })).toBeVisible();
    fireEvent.click(screen.getByRole('button', { name: '<' }));
    expect(screen.queryByRole('button', { name: '<' })).toBeNull();
  });
});
