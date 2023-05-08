import React from 'react';
import { styleContext } from '../index';

export default function Style({ styleInfo }) {
  // const [selected, setSelected] = React.useState({/* styleId: 240500 */});
  // on click set selected client/src/components/Overview/index.jsx
  //                       client/src/components/Overview/styleSelect/style.jsx
  const { styles, setStyle } = React.useContext(styleContext);
  console.log(styleInfo)
  const handleClick = (e) => {
    console.log('clicked')
    setStyle(styles[styleInfo.index]);
  };

  return (
    <>
      <div role="option" onClick={handleClick}>
        {styleInfo.name}
      </div>
      <button type="button" onClick={handleClick} >click me</button>
    </>
  );
}
