import react from 'react'
import {useState} from 'react'

function AddAnswerModal({props, changeMode}){
  const [answer, setAnswer] =useState('');
  const [nickname, setNickname]= useState('');
  const [email, setEmail] = useState('');
  const [images, setImages] = useState([])

  function onTextChange(){}
  function onUpload(){}
  function onSubmit(){}

  return (<></>)
}

export default AddAnswerModal;