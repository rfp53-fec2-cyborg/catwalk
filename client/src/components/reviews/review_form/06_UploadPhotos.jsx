import React, { useState, useEffect } from 'react';
import Requester from '../../../Requester.js';
import LazyImage from '../../shared/LazyImage.jsx';

const requester = Requester();

const UploadPhotos = (props) => {

  const [photoThumbnail, setPhotoThumbnail] = useState([]);
  const [transformedPhotoUrl, setTransformedPhotoUrl] = useState([]);

  const handleUploadedImage = (e) => {
    // https://developer.mozilla.org/en-US/docs/Web/API/FileReader
    const fileReader = new FileReader();
    fileReader.onload = () => {
      // readyState of 2 means the entire read request has been completed
      if (fileReader.readyState === 2) {
        // set to state to show thumbnails
        setPhotoThumbnail(prevThumbnails => [...prevThumbnails, fileReader.result]);
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
      setTransformedPhotoUrl(prevElements => [...prevElements, imageUrl]);
    } catch (err) {
      console.error(err);
    }
  };


  useEffect(() => {
    props.handleOnChange('photos', transformedPhotoUrl);
  }, [transformedPhotoUrl]);

  return (
    <label> Select a maximum of 5 photos to upload:
      <div className="image-holder">
        {photoThumbnail.map((currentPhotoThumbnail, index) =>
          <LazyImage key={index} src={currentPhotoThumbnail} alt="uploaded-image" className="review-thumbnail" />
        )}
      </div>
      {photoThumbnail.length < 5
        ? <input type="file" accept="image/*" name="upload-image" data-testid="imageUpload" onChange={handleUploadedImage}/>
        : null}
    </label>
  );
};

export default UploadPhotos;