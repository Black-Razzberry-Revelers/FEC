import React from 'react';
import OutfitItemsList from './subcomponents/OutfitItemsList.jsx';
import RelatedItemsList from './subcomponents/RelatedItemsList.jsx';

export default function RelatedItemsSection() {
  return (
    <>
      <div><RelatedItemsList /></div>
      <div><OutfitItemsList /></div>
    </>
  );
}
