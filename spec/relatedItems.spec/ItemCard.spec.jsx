import React from 'react';
import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import { currentItem, relatedItems } from './exampleData';

import ItemCard from '../../client/src/components/Related/subcomponents/ItemCard';

jest.mock(
  '../../client/src/components/Related/subcomponents/ComparisonModal',
  () => function mockComparisonModal() {
    return <div>Mock Comparison Modal</div>;
  },
);

jest.mock(
  '../../client/src/components/stars',
  () => function mockStars() {
    return <div>All the stars</div>;
  },
);

const styleContext = React.createContext(null);
const item = {
  product: relatedItems.products[0],
  styles: relatedItems.styles[0],
  ratings: relatedItems.meta[0].ratings,
};
const outfitItems = [
  {
    product: relatedItems.products[1],
    styles: relatedItems.styles[1],
  },
];
const setProduct = jest.fn();
const setOutfitItems = jest.fn();
const setStyle = jest.fn();
const setStyles = jest.fn();

afterEach(() => {
  jest.resetAllMocks();
  cleanup();
});

describe('Item Card', () => {
  it('should render the stars component as a child', () => {
    render(
      <styleContext.Provider value={{ setStyle, setStyles }}>
        <ItemCard item={item} outfitList={false} setProduct={setProduct} />
      </styleContext.Provider>,
    );
    expect(screen.getByText('All the stars')).toBeInTheDocument();
  });

  it('should reveal the Comparison Modal when the compare button is clicked', () => {
    render(
      <styleContext.Provider value={{ setStyle, setStyles }}>
        <ItemCard item={item} outfitList={false} setProduct={setProduct} />
      </styleContext.Provider>,
    );
    expect(screen.queryByRole('button', { name: 'Delete' })).toBeNull();
    expect(screen.getByTestId(/modal-\d{5}/)).toHaveAttribute('hidden');
    fireEvent.click(screen.getByRole('button', { name: 'Compare' }));
    expect(screen.getByTestId(/modal-\d{5}/)).not.toHaveAttribute('hidden');
  });

  xit('should set the overview product and styles when the card is clicked', () => {
    render(
      <styleContext.Provider value={{ setStyle, setStyles }}>
        <ItemCard item={item} outfitList={false} setProduct={setProduct} />
      </styleContext.Provider>,
    );
    expect(setProduct).not.toHaveBeenCalled();
    expect(setStyle).not.toHaveBeenCalled();
    expect(setStyles).not.toHaveBeenCalled();
    fireEvent.click(screen.getByRole('link'));
    expect(setProduct).toHaveBeenCalled();
    // expect(setStyle).toHaveBeenCalled();
    // expect(setStyles).toHaveBeenCalled();
  });

  it('should delete an Item Card when the delete button is clicked', () => {
    render(
      <styleContext.Provider value={{ setStyle, setStyles }}>
        <ItemCard
          item={item}
          outfitItems={outfitItems}
          setOutfitItems={setOutfitItems}
          outfitList
          setProduct={setProduct}
        />
      </styleContext.Provider>,
    );
    expect(screen.queryByRole('button', { name: 'Compare' })).toBeNull();
    expect(setOutfitItems).not.toHaveBeenCalled();
    fireEvent.click(screen.getByRole('button', { name: 'Delete' }));
    expect(setOutfitItems).toHaveBeenCalled();
  });
});
