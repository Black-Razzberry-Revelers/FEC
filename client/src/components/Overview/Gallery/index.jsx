import React from 'react';
import Image from './image';

export default function Gallery() {
  const [display, setDisplay] = React.useState({ /* style.photos[0].url */});

  return (
    <>
      <img alt="current display" />
      <Image setDisplay={setDisplay} />
    </>
  );
}
