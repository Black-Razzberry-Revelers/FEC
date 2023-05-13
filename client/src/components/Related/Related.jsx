import React, { useState } from 'react';
import PropTypes from 'prop-types';
import OutfitItemsList from './subcomponents/OutfitItemsList';
import RelatedItemsList from './subcomponents/RelatedItemsList';

export default function RelatedItemsSection({ currentProduct, setProduct }) {
  return (
    <>
      <RelatedItemsList currentProduct={currentProduct} setProduct={setProduct} />
      <OutfitItemsList currentProduct={currentProduct} setProduct={setProduct} />
    </>
  );
}

RelatedItemsSection.propTypes = {
  currentProduct: PropTypes.shape({
    id: PropTypes.number,
    campus: PropTypes.string,
    name: PropTypes.string,
    slogan: PropTypes.string,
    description: PropTypes.string,
    category: PropTypes.string,
    default_price: PropTypes.string,
    created_at: PropTypes.string,
    updated_at: PropTypes.string,
    features: PropTypes.arrayOf(
      PropTypes.shape({ feature: PropTypes.string, value: PropTypes.string }),
    ),
  }),
  setProduct: PropTypes.func.isRequired,
};

RelatedItemsSection.defaultProps = {
  currentProduct: { features: [] },
};
