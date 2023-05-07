import React from 'react';
import OutfitItemsList from './subcomponents/OutfitItemsList';
import RelatedItemsList from './subcomponents/RelatedItemsList';

export default function RelatedItemsSection() {
  return (
    <>
      <div><RelatedItemsList /></div>
      <div><OutfitItemsList /></div>
    </>
  );
}
