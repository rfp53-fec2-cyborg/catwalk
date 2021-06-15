import React, { useState } from 'react';

const UploadPhotos = (props) => {

  const [photos, setPhotos] = useState([]);

  const handleUploadedImage = (e) => {
    // https://developer.mozilla.org/en-US/docs/Web/API/FileReader
    const fileReader = new FileReader();
    fileReader.onload = () => {
      // readyState of 2 means the entire read request has been completed
      if (fileReader.readyState === 2) {
        setPhotos(prevPhotos => [...prevPhotos, fileReader.result]);
      }
    };
    // reads image data and shows a thumbnail with one of many methods
    fileReader.readAsDataURL(e.target.files[0]);
  };

  console.log(photos);

  return (
    <label> Select a maximum of 5 photos to upload:
      <div className="image-holder">
        {photos.map((currentPhoto, index) =>
          <img src={currentPhoto} alt="uploaded-image" />
        )}
      </div>
      {photos.length < 5
        ? <input type="file" accept="image/*" name="upload-image" onChange={handleUploadedImage}/>
        : null}
    </label>
  );
};

export default UploadPhotos;