import React from 'react';
import Image from './image';
import Thumbnail from './thumbnail';

import { styleContext } from '../index';

export default function Gallery() {
  const { style } = React.useContext(styleContext);
  const [gallery, setGallery] = React.useState(style.photos);
  const [display, setDisplay] = React.useState(gallery[0].url);

  return (
    <>
      <Image display={display} />
      {gallery.map((image, i) => <Thumbnail image={image} key={i} setDisplay={setDisplay}/>)}
    </>
  );
}
