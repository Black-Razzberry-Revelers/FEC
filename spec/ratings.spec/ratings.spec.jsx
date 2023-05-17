/* eslint-disable import/extensions */
import React, { useState } from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import userEvent from '@testing-library/user-event';
import ReviewTile from '../../client/src/components/Ratings/sub-comps/ReviewTile';
import ReviewsList from '../../client/src/components/Ratings/sub-comps/ReviewsList';
import RatingBreakdown from '../../client/src/components/Ratings/sub-comps/RatingBreakdown';
import ProductBreakdown from '../../client/src/components/Ratings/sub-comps/ProductBreakdown';
import UploadImages from '../../client/src/components/Ratings/sub-comps/sub-write-review/UploadImages';
import OverallRating from '../../client/src/components/Ratings/sub-comps/sub-write-review/OverallRating';
import FeedbackAndInfo from '../../client/src/components/Ratings/sub-comps/sub-write-review/FeedbackAndInfo';
import Characteristics from '../../client/src/components/Ratings/sub-comps/sub-write-review/Characteristics';
import proxyReviews from './proxyReviews';

describe('Ratings & Revewis', () => {
  test('it should render the RatingBreakdown component', () => {
    function TestComponent() {
      const [filters, setFilters] = useState([]);
      return (
        <RatingBreakdown
          metaData={proxyReviews.metaData}
          filters={filters}
          setFilters={setFilters}
        />
      );
    }
    render(<TestComponent />);
  });

  test('it should render the ProductBreakdown component', () => {
    render(<ProductBreakdown metaData={proxyReviews.metaData} />);
  });

  test('it should render the ReviewsList component', () => {
    function TestComponent() {
      const [filters, setFilters] = useState([]);
      const [moreReviews, setMoreReviews] = useState(false);
      return (
        <ReviewsList reviews={proxyReviews.results} filters={filters} moreReviews={moreReviews} />
      );
    }
    render(<TestComponent />);
  });

  test('it should render the ReviewTile component', () => {
    render(proxyReviews.results.map(((review, i) => <ReviewTile review={review} key={`${i}review.spec`} />)));
  });

  // test('it should render the WriteNewReview component', () => {});

  test('it should render the UploadImages component', () => {
    function TestComponent() {
      const [person, setPerson] = useState({
        product_id: 40345,
        rating: 0,
        recommend: true,
        summary: '',
        body: '',
        nickname: '',
        email: '',
        characteristics: {},
        photos: [],
      });
      return (
        <UploadImages person={person} setPerson={setPerson} />
      );
    }
    render(<TestComponent />);
  });

  test('it should render the OverallRating component', () => {
    function TestComponent() {
      const [person, setPerson] = useState({
        product_id: 40345,
        rating: 0,
        recommend: true,
        summary: '',
        body: '',
        nickname: '',
        email: '',
        characteristics: {},
        photos: [],
      });
      return (
        <OverallRating person={person} setPerson={setPerson} />
      );
    }
    render(<TestComponent />);
  });

  test('it should render the FeedbackAndInfo component', () => {
    function TestComponent() {
      const [person, setPerson] = useState({
        product_id: 40345,
        rating: 0,
        recommend: true,
        summary: '',
        body: '',
        nickname: '',
        email: '',
        characteristics: {},
        photos: [],
      });
      return (
        <FeedbackAndInfo person={person} setPerson={setPerson} />
      );
    }
    render(<TestComponent />);
  });

  test('it should render the Characteristics component', () => {
    function TestComponent() {
      const [person, setPerson] = useState({
        product_id: 40345,
        rating: 0,
        recommend: true,
        summary: '',
        body: '',
        nickname: '',
        email: '',
        characteristics: {},
        photos: [],
      });
      return (
        <Characteristics person={person} setPerson={setPerson} metaData={proxyReviews.metaData} />
      );
    }
    render(<TestComponent />);
  });
});

// const proxyReviews = require('./proxyReviews');
// console.log('>>>>>>>>>>>>>>>>', proxyReviews.results);
