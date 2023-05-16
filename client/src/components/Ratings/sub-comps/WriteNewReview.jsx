/* eslint-disable max-len */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/react-in-jsx-scope */
import Reat, { useState } from 'react';
import OverallRating from './sub-write-review/OverallRating';
import Characteristics from './sub-write-review/Characteristics';
import FeedbackAndInfo from './sub-write-review/FeedbackAndInfo';
import UploadImages from './sub-write-review/UploadImages';
import fetcher from '../../fetcher';

function WriteNewReview({ setWriteReview, metaData, writeReview }) {
  const showHideClassName = writeReview ? 'modal display-block' : 'modal display-none';
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

  const handleSubmit = (e) => {
    e.preventDefault();
    const {
      product_id,
      rating,
      summary,
      body,
      recommend,
      nickname,
      email,
      characteristics,
      photos,
    } = person;

    fetcher.addReview(
      product_id,
      rating,
      summary,
      body,
      recommend,
      nickname,
      email,
      photos,
      characteristics,
    )
      .then(() => setWriteReview(false))
      .catch((err) => console.log('WRITE REVIEW ERR', err));
  };

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        <span
          className="material-symbols-outlined"
          onClick={() => setWriteReview(false)}
        >
          cancel
        </span>
        <form>
          <label>Write Your Review</label>

          <p>About the Product Name Here</p>
          <OverallRating setPerson={setPerson} person={person} />

          <fieldset>
            <legend>Do you recommend this product?</legend>

            <label htmlFor="yes">Yes</label>
            <input
              type="radio"
              id="yes"
              name="recommendation"
              required
              onClick={() => setPerson({
                ...person,
                recommend: true,
              })}
            />

            <label htmlFor="no">No</label>
            <input
              type="radio"
              id="no"
              name="recommendation"
              required
              onClick={() => setPerson({
                ...person,
                recommend: false,
              })}
            />
          </fieldset>

          {metaData && <Characteristics metaData={metaData} setPerson={setPerson} person={person} />}
          <FeedbackAndInfo setPerson={setPerson} person={person} />

          <UploadImages setPerson={setPerson} person={person} />
          <button type="submit" onClick={(e) => handleSubmit(e)}>Click</button>
        </form>
      </section>
    </div>
  );
}

export default WriteNewReview;
