import React from 'react';
import Image from './image';
import Thumbnail from './thumbnail';

export default function Gallery({ gallery, display, setDisplay }) {
  const [photoIndex, setPhotoIndex] = React.useState(1);

  const handleClickUp = () => {
    if (photoIndex === gallery.length - 1) {
      setPhotoIndex(0);
    } else {
      setPhotoIndex(photoIndex + 1);
    }
    setDisplay(gallery[photoIndex]);
  };

  const handleClickDown = () => {
    console.log(photoIndex);
    if (photoIndex === 0) {
      setPhotoIndex(gallery.length - 1);
    } else {
      setPhotoIndex(photoIndex - 1);
    }
    setDisplay(gallery[photoIndex]);
  };

  return (
    <div role="main" className="gallery">
      <div className="display">
        <Image display={display} />
        <button type="button" onClick={handleClickUp}>{'>'}</button>
        <button type="button" onClick={handleClickDown}>{'<'}</button>
      </div>
      <div className="imageSelect">
        {gallery.map((image, i) => <Thumbnail image={image} key={i} setDisplay={setDisplay} />)}
      </div>
    </div>
  );
}
