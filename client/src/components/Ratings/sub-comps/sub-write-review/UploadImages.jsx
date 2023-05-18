/* eslint-disable react/button-has-type */
/* eslint-disable react/react-in-jsx-scope */
import React, { useState, useEffect } from 'react';

function UploadImages({ person, setPerson }) {
  const [imagesUrls, setImagesUrls] = useState([]);

  useEffect(() => {
    if (person.photos.length < 1) return;
    const newImagesUrls = person.photos.map((photo) => URL.createObjectURL(photo));
    setImagesUrls(newImagesUrls);
  }, [person.photos]);

  const onImageChange = (e) => {
    const selectedFiles = e.target.files;
    setPerson((prevPerson) => ({
      ...prevPerson,
      photos: [...prevPerson.photos, ...selectedFiles].slice(0, 5),
    }));
  };

  const addMoreFiles = () => {
    const input = document.getElementById('upload-input');
    input.click();
  };

  return (
    <div className="upload-images">
      <input
        type="file"
        id="upload-input"
        multiple
        accept="image/*"
        onChange={onImageChange}
        maxLength={5}
        style={{ display: 'none' }}
      />
      {imagesUrls.map((imageSrc) => (
        <img className="img-thumbnail" src={imageSrc} alt="" key={imageSrc} style={{ width: '2rem', height: '2rem' }} />
      ))}
      {person.photos.length < 5 && (
        <button onClick={addMoreFiles}>{person.photos.length ? 'Add More' : 'Add a photo'}</button>
      )}
    </div>
  );
}

export default UploadImages;
