import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { currentItem, relatedItems } from './exampleData';

import RelatedItemsList from '../../client/src/components/Related/subcomponents/RelatedItemsList';

jest.mock(
  '../../client/src/components/Related/subcomponents/ItemCard',
  () => function mockItemCard() {
    return (
      <div value="mock-item-card">
        <img
          src="https://static-00.iconduck.com/assets.00/image-icon-256x256-09od4zyo.png"
          alt="mock"
        />
        <div>Some Fake Product</div>
      </div>
    );
  },
);

describe('Related Item List', () => {
  it('should contain ItemCards as children', () => {
    const setProduct = jest.fn();
    render(<RelatedItemsList currentProduct={currentItem} setProduct={setProduct} />);

    screen.findAllByText('Mock Item Card')
      .then((results) => (results.forEach(
        (result) => expect(result).toBe('Blah Blah Blah'),
      )));
  });
});
