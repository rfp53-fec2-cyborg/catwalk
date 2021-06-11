import React, { useState } from 'react';
import Modal from '../../shared/Modal.jsx';
import DrawDynamicStars from './02_DrawDynamicStars.jsx';
import Recommendation from './03_Recommendation.jsx';
import Characteristics from './04_Characteristics.jsx';
import SummaryAndBody from './05_SummaryAndBody.jsx';
import UploadPhotos from './06_UploadPhotos.jsx';
import PersonalInfo from './07_PersonalInfo.jsx';

const ReviewForm = ({data}) => {

  const characteristics = data.reviewsMeta.characteristics;
  const [formCharacteristicFields, setSormCharacteristicFields] = useState(Object.keys(characteristics));
  const [formDetails, setFormDetails] = useState({
    'product_id': data.product.id,
    'rating': 0,
    'recommend': false,
    'summary': '',
    'body': '',
    'name': '',
    'email': '',
    'photos': [],
    'characteristics': {},
  });

  const handleOnChange = (key, value) => {
    setFormDetails({...formDetails, [key]: value});
  };

  const handleSubmitReview = () => {
    console.log('handleSubmitReview function is triggered ', formDetails);
  };

  console.log(formDetails);

  const content = (
    <>
      <h2> Write Your Review </h2>
      <h3> About the {data.product.name}</h3>
      <form >
        <div id="review-form-rating">
          <h4> Overall Rating </h4>
          <DrawDynamicStars handleOnChange={handleOnChange}/>
        </div>

        <div>
          <h4> Recommendation </h4>
          <Recommendation handleOnChange={handleOnChange}/>
        </div>

        <div>
          <h4> Characteristics </h4>
          <Characteristics handleOnChange={handleOnChange}/>
        </div>

        <div>
          <h4> Summary and Body </h4>
          <SummaryAndBody handleOnChange={handleOnChange}/>
        </div>

        <div>
          <h4> Upload Photos </h4>
          <UploadPhotos handleOnChange={handleOnChange}/>
        </div>

        <div>
          <h4> Personal Information </h4>
          <PersonalInfo handleOnChange={handleOnChange}/>
        </div>

      </form>
      <button type="submit" onClick={handleSubmitReview}> Submit Review </button>
    </>
  );

  return (
    <Modal content={content}/>
  );
};

export default ReviewForm;