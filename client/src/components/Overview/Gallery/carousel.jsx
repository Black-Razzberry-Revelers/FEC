import React from 'react';
import Thumbnail from './thumbnail';
import { styleContext } from '../../App';

export default function Carousel({ setDisplay }) {
  const { style } = React.useContext(styleContext);
  return (
    style.photos
      ? (
        <div className="imageSelect">
          {style.photos.map((image, i) =>
            <Thumbnail image={image} key={i} setDisplay={setDisplay} />)}
        </div>
      )
      : <div>...</div>
  );
}
