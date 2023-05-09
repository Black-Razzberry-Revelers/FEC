import React from 'react';
import { styleContext } from '../index';

export default function Style({ styleInfo }) {
  // const [selected, setSelected] = React.useState({/* styleId: 240500 */});
  // on click set selected client/src/components/Overview/index.jsx
  //                       client/src/components/Overview/styleSelect/style.jsx
  const { style, setStyle } = React.useContext(styleContext);
  const handleClick = () => {
    console.log('clicked')
    setStyle(styleInfo);
  };

  return (
    <div role="option" onClick={handleClick}>
      {styleInfo.name}
    </div>
  );
}
