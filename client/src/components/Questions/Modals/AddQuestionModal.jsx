import React, { useState } from 'react';

function AddQuestionModal({ props, changeMode }) {
  const [answer, setAnswer] = useState('');
  const [nickname, setNickname] = useState('');
  const [email, setEmail] = useState('');

  function onTextChange() {}
  function onSubmit() {}

  return (<><h1>ADD A QUESTION!</h1></>);
}

export default AddQuestionModal;
