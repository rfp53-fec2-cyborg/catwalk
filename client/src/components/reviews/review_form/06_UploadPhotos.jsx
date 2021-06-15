import React, { useState, useEffect } from 'react';
import Requester from '../../../Requester.js';

const requester = Requester();

const UploadPhotos = (props) => {

  const [photos, setPhotos] = useState([]);
  const [photoUrl, setPhotoUrl] = useState([]);

  const handleUploadedImage = (e) => {
    // https://developer.mozilla.org/en-US/docs/Web/API/FileReader
    const fileReader = new FileReader();
    fileReader.onload = () => {
      // readyState of 2 means the entire read request has been completed
      if (fileReader.readyState === 2) {
        // set to state to show thumbnails
        setPhotos(prevThumbnails => [...prevThumbnails, fileReader.result]);
        // call function to send photo data to be transformed into hosted URL
        retrieveTransformedImageURL({file: fileReader.result});
      }
    };
    // reads image data and shows a thumbnail with one of many methods
    fileReader.readAsDataURL(e.target.files[0]);
  };

  const retrieveTransformedImageURL = async (file) => {
    try {
      let imageUrl = await requester.uploadImage(file);
      setPhotoUrl(prevElements => [...prevElements, imageUrl]);
    } catch (err) {
      console.error(err);
    }
  };


  useEffect(() => {
    props.handleOnChange('photos', photoUrl);
  }, [photoUrl]);

  return (
    <label> Select a maximum of 5 photos to upload:
      <div className="image-holder">
        {photos.map((currentPhoto, index) =>
          <img key={index} src={currentPhoto} alt="uploaded-image" className="thumbnail" />
        )}
      </div>
      {photos.length < 5
        ? <input type="file" accept="image/*" name="upload-image" data-testid="imageUpload" onChange={handleUploadedImage}/>
        : null}
    </label>
  );
};

export default UploadPhotos;