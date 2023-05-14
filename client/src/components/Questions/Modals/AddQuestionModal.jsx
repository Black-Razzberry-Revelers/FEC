import React, { useState } from 'react';
import { requests } from '../../requests';

function AddQuestionModal({ v, c }) {
  const [question, setQuestion] = useState('');
  const [nickname, setNickname] = useState('');
  const [email, setEmail] = useState('');

  const emailREGEXP = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  function validate() {
    if (question === '' || nickname === '' || email === '') {
      alert("You can't submit unless you've filled in all forms!");
      return false;
    } if (!email.match(emailREGEXP)) {
      alert("Please input a valid email. We want to keep in touch with you!")
      return false;
    }
    return true;
  }

  function change(text, set) {
    set(text);
  }
  function onSubmit() {
    if (validate()) {
      requests.post.question(v.pid, question, nickname, email).then(() => {
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
    <>
      <h3>Your Question</h3>
      <form>
        <input value={question} type="text" placeholder={p1} onChange={(e) => change(e.target.value, setQuestion)} />
        <input value={nickname} type="text" placeholder={p2} onChange={(e) => change(e.target.value, setNickname)} />
        <input value={email} type="text" placeholder={p3} onChange={(e) => change(e.target.value, setEmail)} />
      </form>
      <button onClick={onSubmit}>Submit</button>
      <button onClick={onBack}>Go Back!</button>
    </>
  );
}

export default AddQuestionModal;
