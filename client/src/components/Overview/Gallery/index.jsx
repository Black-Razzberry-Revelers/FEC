import React from 'react';
import Image from './image';
import Carousel from './carousel';

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
      <Carousel setDisplay={setDisplay} />
      <div className="display">
        <Image display={display} />
        <div className="change">
          <button className="changedown" type="button" onClick={handleClickDown}>{'<'}</button>
          <button className="changeup" type="button" onClick={handleClickUp}>{'>'}</button>
        </div>
      </div>
    </div>
  );
}
