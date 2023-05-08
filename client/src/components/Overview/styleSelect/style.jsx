import React from 'react';

export default function Style({ style, setStyle }) {
  const [selected, setSelected] = React.useState({/* styleId: 240500 */});
  // on click set selected
  return (
    <ul>
      <li>style 1</li>
      <li>style 2</li>
    </ul>
  );
}
