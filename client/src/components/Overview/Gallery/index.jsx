import React from 'react';
import Image from './image';
import Thumbnail from './thumbnail';

export default function Gallery({ gallery, display, setDisplay }) {
  return (
    <div className="gallery">
      <div>
        <Image display={display} />
      </div>
      <div className="imageSelect">
        {gallery.map((image, i) => <Thumbnail image={image} key={i} setDisplay={setDisplay}/>)}
      </div>
    </div>
  );
}
