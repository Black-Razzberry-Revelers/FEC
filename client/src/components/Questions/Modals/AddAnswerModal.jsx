import React, { useState } from 'react';

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
      alert("Please input a valid email. We want to keep in touch with you!")
      return false;
    }
    return true;
  }

  function change(text, set) {
    set(text);
  }
  function onSubmit() {
    if(validate()) {
      c.changeMode('', {});
    }
  }

  function onBack() {
    c.changeMode('', {});
  }

  return (
    <>
      <h1>ADD AN ANSWER ON Question: {v.modeProps.question.question_body}</h1>
      <form>
        <input value={answer} type='text' onChange={(e)=>change(e.target.value, setAnswer)} />
        <input value={nickname} type='text' onChange={(e)=>change(e.target.value, setNickname)} />
        <input value={email} type='text' onChange={(e)=>change(e.target.value, setEmail)} />
      </form>
      <button>Upload an Image</button>
      <button onClick={onSubmit}>Submit</button>
      <button onClick={onBack}>Go Back!</button>
    </>
  );
}

export default AddAnswerModal;
