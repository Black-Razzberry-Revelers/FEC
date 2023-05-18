import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { currentItem, relatedItems } from './exampleData';

import ComparisonModal from '../../client/src/components/Related/subcomponents/ComparisonModal';

const item = { product: relatedItems.products[0] };
const product = { product: currentItem.product };

const styleContext = React.createContext(null);

describe('Comparison Modal', () => {
  it('should render the comparison modal component', () => {
    render(
      <styleContext.Provider value={product}>
        <ComparisonModal item={item} />
      </styleContext.Provider>,
    );
    expect(screen.getByText('Comparing')).toBeInTheDocument();
  });
});
