import React from 'react';


export default function Image({ display, setDisplay }) {


  // on click set display
  return (
    <img className="display" alt="main" src={display} />
  );
}
