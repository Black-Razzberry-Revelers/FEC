import React, { useState } from 'react';

function AddQuestionModal({ v, c }) {
  const [answer, setAnswer] = useState('');
  const [nickname, setNickname] = useState('');
  const [email, setEmail] = useState('');

  function change(text, set) {
    set(text);
  }
  function onSubmit() {
    c.changeMode('', {});
  }

  function onBack() {
    c.changeMode('', {});
  }

  return (
    <>
      <h1>ADD A QUESTION!</h1>
      <form>
        <input value={answer} type='text' onChange={(e)=>change(e.target.value, setAnswer)}/>
        <input value={nickname} type='text' onChange={(e)=>change(e.target.value, setNickname)}/>
        <input value={email} type='text' onChange={(e)=>change(e.target.value, setEmail)}/>
      </form>
      <button onClick={onSubmit}>Submit</button>
      <button onClick={onBack}>Go Back!</button>
    </>
  );
}

export default AddQuestionModal;
