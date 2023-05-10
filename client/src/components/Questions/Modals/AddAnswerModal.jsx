import React, { useState } from 'react';

function AddAnswerModal({ props, changeMode }) {
  const [answer, setAnswer] = useState('');
  const [nickname, setNickname] = useState('');
  const [email, setEmail] = useState('');
  const [images, setImages] = useState([]);

  function onTextChange() {}
  function onUpload() {}
  function onSubmit() {}

  return (<><h1>ADD AN ANSWER ON Question: {props.question.question_body}</h1></>);
}

export default AddAnswerModal;
