import React from 'react';
import { styleContext } from '../../App';

export default function StyleOption({ styleInfo }) {
  // const [selected, setSelected] = React.useState({/* styleId: 240500 */});
  // on click set selected client/src/components/Overview/index.jsx
  //                       client/src/components/Overview/styleSelect/style.jsx
  const { style, setStyle } = React.useContext(styleContext);
  const handleClick = () => {
    setStyle(styleInfo);
  };

  return (
    <div role="option" onClick={handleClick}>
      {styleInfo.name}
    </div>
  );
}
