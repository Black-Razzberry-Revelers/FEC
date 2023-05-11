import React, { useState } from 'react';

function AddAnswerModal({ v, c }) {
  const [answer, setAnswer] = useState('');
  const [nickname, setNickname] = useState('');
  const [email, setEmail] = useState('');
  const [images, setImages] = useState([]);

  function onUpload() {}

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
      <h1>ADD AN ANSWER ON Question: {v.modeProps.question.question_body}</h1>
      <form>
        <input value={answer} type='text' onChange={(e)=>change(e.target.value, setAnswer)}/>
        <input value={nickname} type='text' onChange={(e)=>change(e.target.value, setNickname)}/>
        <input value={email} type='text' onChange={(e)=>change(e.target.value, setEmail)}/>
      </form>
      <button>Upload an Image</button>
      <button onClick={onSubmit}>Submit</button>
      <button onClick={onBack}>Go Back!</button>
    </>
  );
}

export default AddAnswerModal;
