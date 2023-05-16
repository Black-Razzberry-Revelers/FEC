/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { UseState } from 'react';

function FeedbackAndInfo({ setPerson, person }) {
  return (
    <div>
      <fieldset>
        <legend>Summary: </legend>

        <label htmlFor="summary" />
        <input
          name="summary"
          type="text"
          placeholder="Why did you like the product or not?"
          minLength="0"
          maxLength="60"
          required
          onChange={(e) => setPerson({
            ...person,
            summary: e.target.value,
          })}
        />
        <p>{person.summary.length}</p>
      </fieldset>
      <fieldset>
        <legend>You review goes here: </legend>

        <label htmlFor="body" />
        <input
          name="body"
          type="text"
          placeholder="Example: Best purchase ever!"
          minLength="50"
          maxLength="1000"
          required
          onChange={(e) => setPerson({
            ...person,
            body: e.target.value,
          })}
        />
        <p>
          Minimum required characters left:
          {' '}
          {person.body.length}
        </p>
      </fieldset>

      <fieldset>
        <legend>What is your nickname: </legend>

        <label htmlFor="nickname" />
        <input
          name="nickname"
          type="text"
          placeholder="Example: jackson11!"
          minLength="0"
          maxLength="60"
          required
          onChange={(e) => setPerson({
            ...person,
            nickname: e.target.value,
          })}
        />
        <p>For privacy reasons, do not use your full name or email address</p>
      </fieldset>

      <fieldset>
        <legend>Email: </legend>

        <label htmlFor="email" />
        <input
          name="email"
          type="text"
          placeholder="For authentication reasons, you will not be emailed"
          minLength="0"
          maxLength="60"
          required
          onChange={(e) => setPerson({
            ...person,
            email: e.target.value,
          })}
        />
      </fieldset>
    </div>
  );
}

export default FeedbackAndInfo;
