import React, { useState } from 'react';
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
