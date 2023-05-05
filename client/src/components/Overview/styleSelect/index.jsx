import React from 'react';
import Style from './style';

export default function StyleSelect({ style, setStyle }) {
  const [availableStyles, setAvailableStyles] = React.useState({ /* data.results */ });

  return (
    <Style style={style} setStyle={setStyle} />
  );
}
