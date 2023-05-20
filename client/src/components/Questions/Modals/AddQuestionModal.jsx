/* eslint-disable no-alert */
import React, { useState } from 'react';
import fetcher from '../../fetcher';

function AddQuestionModal({ v, c }) {
  const [question, setQuestion] = useState('');
  const [nickname, setNickname] = useState('');
  const [email, setEmail] = useState('');

  // eslint-disable-next-line no-useless-escape
  const emailREGEXP = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  function validate() {
    if (question === '' || nickname === '' || email === '') {
      alert("You can't submit unless you've filled in all forms!");
      return false;
    } if (!email.match(emailREGEXP)) {
      alert('Please input a valid email. We want to keep in touch with you!');
      return false;
    }
    return true;
  }

  function change(text, set) {
    set(text);
  }
  function onSubmit() {
    if (validate()) {
      fetcher.post.question(v.pid, question, nickname, email).then(() => {
        c.changeMode('', {});
      });
    }
  }

  function onBack() {
    c.changeMode('', {});
  }

  const p1 = 'What question do you have about this product?';
  const p2 = 'What Nickname do you want to be known as?';
  const p3 = 'email@provider.com';
  return (
    <div className="modal-frame">
      <h3 className="section-head">Your Question</h3>
      <form className="modal-form">
        <input value={question} type="text" placeholder={p1} data-testid="question-input" onChange={(e) => change(e.target.value, setQuestion)} />
        <input value={nickname} type="text" placeholder={p2} data-testid="question-nickname-input" onChange={(e) => change(e.target.value, setNickname)} />
        <input value={email} type="text" placeholder={p3} data-testid="question-email-input" onChange={(e) => change(e.target.value, setEmail)} />
      </form>
      <div className="submit-button" onClick={onSubmit} data-testid="question-submit" role="button" onKeyPress={onSubmit} tabIndex="0">Submit</div>
      <div className="submit-button" onClick={onBack} role="button" onKeyPress={onBack} tabIndex="0">Go Back!</div>
    </div>
  );
}

export default AddQuestionModal;
