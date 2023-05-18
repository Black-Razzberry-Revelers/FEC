import React, { useState } from 'react';
import PropTypes from 'prop-types';
import OutfitItemsList from './subcomponents/OutfitItemsList';
import RelatedItemsList from './subcomponents/RelatedItemsList';

export default function RelatedItemsSection() {
  return (
    <>
      <RelatedItemsList />
      <OutfitItemsList />
    </>
  );
}
