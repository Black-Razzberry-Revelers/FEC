import React from 'react';
import Overview from './Overview';

export default function App(props) {
  return (
    <div className="body">
      <h1>product page</h1>
      <div>
        our components go here
        <Overview />
      </div>
    </div>
  );
}
