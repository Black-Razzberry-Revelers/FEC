import React from 'react';
import RelatedItemsSection from './Related/Related';
import Overview from './Overview';
import Questions from './Questions/Questions';

export default function App() {
  return (
    <div className="body">
      <h1>product page</h1>
      <div>
        our components go here
        <Overview />
        <RelatedItemsSection />
        <Questions />
      </div>
    </div>
  );
}
