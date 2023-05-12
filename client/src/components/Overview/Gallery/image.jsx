import React from 'react';

export default function Image({ display }) {
  return (
    <img className="display" alt="main" src={display.url} />
  );
}
