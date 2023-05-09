import React from 'react';
import RelatedItemsSection from './Related/Related';
import Overview from './Overview';
import Questions from './Questions/Questions';
import findAvgRating from '../calculateAvgRating';

export default function App() {
  const [avgRating, setAvgRating] = React.useState(3.8); // hardcoded for now. change later

  return (
    <div className="body">
      <h1>product page</h1>
      <div>
        our components go here
        <Overview avgRating={avgRating} />
        <RelatedItemsSection />
        <Questions />
      </div>
    </div>
  );
}
