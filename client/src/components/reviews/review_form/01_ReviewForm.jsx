import React, { useState } from 'react';
import Modal from '../../shared/Modal.jsx';
import DrawDynamicStars from './02_DrawDynamicStars.jsx';
import Recommendation from './03_Recommendation.jsx';
import Characteristics from './04_Characteristics.jsx';
import SummaryAndBody from './05_SummaryAndBody.jsx';
import UploadPhotos from './06_UploadPhotos.jsx';
import PersonalInfo from './07_PersonalInfo.jsx';
import Requester from '../../../Requester.js';

const requester = Requester();

const initialFormState = {
  'product_id': '',
  'rating': 0,
  'recommend': '',
  'summary': '',
  'body': '',
  'name': '',
  'email': '',
  'photos': [],
  'characteristics': {},
};

const testData = {
  'product_id': 17067,
  'rating': 5,
  'summary': 'Lorem ipsum',
  'body': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  'recommend': false,
  'name': 'Godfrey Testing',
  'email': 'lorem@ipsum.com',
  'photos': [],
  'characteristics': {}
};

const ReviewForm = ({data}) => {

  const characteristics = data.reviewsMeta.characteristics;
  const [formCharacteristicFields, setSormCharacteristicFields] = useState(Object.keys(characteristics));
  const [formValid, setFormValid] = useState(false);
  const [formDetails, setFormDetails] = useState({
    'product_id': data.product.id,
    'rating': 0,
    'recommend': '',
    'summary': '',
    'body': '',
    'name': '',
    'email': '',
    'photos': [],
    'characteristics': {},
  });
  const [formErrorMessages, setFormErrorMessages] = useState({
    'error_rating': '',
    'error_recommend': '',
    'error_summary': '',
    'error_body': '',
    'error_name': '',
    'error_email': '',
    // 'error_photos': '',
    // 'error_characteristics': '',
  });

  const validateFormBeforeSubmission = () => {
    if (formDetails.rating === 0) {
      setFormErrorMessages(prevErrMsg => { return {...prevErrMsg, 'error_rating': 'Rating is required.'}; });
    }

    if (typeof formDetails.recommend !== 'boolean') {
      setFormErrorMessages(prevErrMsg => { return {...prevErrMsg, 'error_recommend': 'Recommendation is required.'}; });
    }

    if (formDetails.summary.length < 1) {
      setFormErrorMessages(prevErrMsg => { return {...prevErrMsg, 'error_summary': 'Summary is required.'}; });
    }

    if (formDetails.body.length < 50) {
      setFormErrorMessages(prevErrMsg => { return {...prevErrMsg, 'error_body': 'Body is required.'}; });
    }

    if (formDetails.name.length < 1) {
      setFormErrorMessages(prevErrMsg => { return {...prevErrMsg, 'error_name': 'Name is required.'}; });
    }

    if (formDetails.email.indexOf('@') === -1) {
      setFormErrorMessages(prevErrMsg => { return {...prevErrMsg, 'error_email': 'Valid email address is required.'}; });
    }

    const errorList = Object.values(formErrorMessages);
    const hasNoErrors = (currentValue) => currentValue.length === 0;
    debugger;
    if (errorList.every(hasNoErrors)) {
      setFormValid(true);
      submitForm(formDetails);
    } else {
      setFormValid(false);
    }
  };

  const handleOnChange = (key, value) => {
    setFormDetails({...formDetails, [key]: value});
  };

  const submitForm = async (form) => {
    try {
      let submitReviewResponse = await requester.postReview(form);
      console.log(submitReviewResponse);
      setFormDetails({...initialFormState});
    } catch (err) {
      console.error('Error with posting data to API: ', err);
    }
  };

  const content = (
    <>
      <h2> Write Your Review </h2>
      <h3> About the {data.product.name}</h3>
      <form >
        <div id="review-form-rating">
          <h4> Overall Rating </h4>
          <DrawDynamicStars handleOnChange={handleOnChange}/>
          <div className="error-message">{formErrorMessages.error_rating}</div>
        </div>

        <div>
          <h4> Recommendation </h4>
          <Recommendation handleOnChange={handleOnChange}/>
          <div className="error-message">{formErrorMessages.error_recommend}</div>
        </div>

        <div>
          <h4> Characteristics </h4>
          <Characteristics handleOnChange={handleOnChange}/>
        </div>

        <div>
          <h4> Summary and Body </h4>
          <SummaryAndBody handleOnChange={handleOnChange} formErrorMessages={formErrorMessages}/>
        </div>

        <div>
          <h4> Upload Photos </h4>
          <UploadPhotos handleOnChange={handleOnChange}/>
        </div>

        <div>
          <h4> Personal Information </h4>
          <PersonalInfo handleOnChange={handleOnChange} formErrorMessages={formErrorMessages}/>
        </div>

      </form>
      <button type="submit" onClick={validateFormBeforeSubmission}> Submit Review </button>
      <button type="submit" onClick={() => submitForm(testData)}> FOR TESTING SUBMIT TEST DATA </button>
    </>
  );

  return (
    <Modal content={content}/>
  );
};

export default ReviewForm;