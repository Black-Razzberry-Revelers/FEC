import React, { useState } from 'react';
import { requests } from '../../requests';

function AddAnswerModal({ v, c }) {
  const [answer, setAnswer] = useState('');
  const [nickname, setNickname] = useState('');
  const [email, setEmail] = useState('');
  const [images, setImages] = useState([]);
  function onUpload() {}

  const emailREGEXP = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  function validate() {
    if (answer === '' || nickname === '' || email === '') {
      alert("You can't submit unless you've filled in all forms!");
      return false;
    }
    if (!email.match(emailREGEXP)) {
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
      requests.post.answer(v.pid, v.modeProps.qid, answer, nickname, email).then(() => {
        c.changeMode('', {});
      });
    }
  }

  function onBack() {
    c.changeMode('', {});
  }

  const p1 = 'What answer do you have to this question?';
  const p2 = 'What Nickname do you want to be known as?';
  const p3 = 'email@provider.com';

  return (
    <div className="modal modal-frame">
      <h1>
        ADD AN ANSWER ON Question:
        {' '}
        {v.modeProps.question.question_body}
      </h1>
      <form>
        <input value={answer} type="text" placeholder={p1} data-testid="answer-input" onChange={(e) => change(e.target.value, setAnswer)} />
        <input value={nickname} type="text" placeholder={p2} data-testid="answer-nickname-input" onChange={(e) => change(e.target.value, setNickname)} />
        <input value={email} type="text" placeholder={p3} data-testid="answer-email-input" onChange={(e) => change(e.target.value, setEmail)} />
      </form>
      <div className="submit-button" onClick={onSubmit} data-testid="answer submit">Submit</div>
      <div className="submit-button" onClick={onBack}>Go Back!</div>
    </div>
  );
}

export default AddAnswerModal;
