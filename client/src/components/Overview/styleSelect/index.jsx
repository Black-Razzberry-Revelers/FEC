import React from 'react';
import Style from './style';

export default function StyleSelect({ style, setStyle }) {
  return (
    <Style style={style} setStyle={setStyle} />
  );
}
