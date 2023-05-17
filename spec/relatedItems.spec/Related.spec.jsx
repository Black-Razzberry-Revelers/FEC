import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import RelatedItemsSection from '../../client/src/components/Related/Related';
// import App from '../../client/src/components/App';

jest.mock(
  '../../client/src/components/Related/subcomponents/RelatedItemsList',
  () => function mockRelatedItemsList({ currentProduct, setProduct }) {
    return <div>Mocked RelatedItemsList</div>;
  },
);
jest.mock(
  '../../client/src/components/Related/subcomponents/OutfitItemsList',
  () => function mockOutfitItemsList({ currentProduct, setProduct }) {
    return <div>Mocked OutfitItemsList</div>;
  },
);

describe('Related Items Section Component', () => {
  it('should render a mocked RelatedItemsList component and a mocked OutfitItemsList component', () => {
    render(
      <RelatedItemsSection />,
    );

    expect(screen.getByText('Mocked RelatedItemsList')).toBeInTheDocument();
    expect(screen.getByText('Mocked OutfitItemsList')).toBeInTheDocument();
  });
});
