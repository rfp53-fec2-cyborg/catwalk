import React, { useState, useEffect } from 'react';
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

const errorMessage = {
  'rating_errorMsg': 'Rating is required.',
  'recommend_errorMsg': 'Recommendation is required.',
  'summary_errorMsg': 'Summary is required.',
  'body_errorMsg': 'Body is required.',
  'name_errorMsg': 'Name is required.',
  'email_errorMsg': 'Valid email address is required.',
};

const ReviewForm = ({data}) => {

  const characteristics = data.reviewsMeta.characteristics;

  const [formCharacteristicFields, setSormCharacteristicFields] = useState(Object.keys(characteristics));
  const [underSubmission, setUnderSubmission] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
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
    'rating_errorMsg': '',
    'recommend_errorMsg': '',
    'summary_errorMsg': '',
    'body_errorMsg': '',
    'name_errorMsg': '',
    'email_errorMsg': '',
    // 'error_photos': '',
    // 'error_characteristics': '',
  });

  const errorLogic = {
    'rating': () => formDetails.rating === 0,
    'recommend': () => typeof formDetails.recommend !== 'boolean',
    'summary': () => formDetails.summary.length < 1,
    'body': () => formDetails.body.length < 50,
    'name': () => formDetails.name.length < 1,
    'email': () => formDetails.email.indexOf('@') === -1,
  };

  const handleOnChange = (key, value) => {
    setFormDetails({...formDetails, [key]: value});
  };

  const validateForm = async (e) => {
    e.preventDefault();
    setUnderSubmission(true);

    var isErrorFree = true;
    for (var key in errorLogic) {
      if (errorLogic[key]()) {
        await setFormErrorMessages(prevErrMsg => { return {...prevErrMsg, [`${key}_errorMsg`]: errorMessage[`${key}_errorMsg`]}; });
        isErrorFree = false;
      }
    }
    isErrorFree ? submitForm() : setUnderSubmission(false);
  };

  const submitForm = async () => {
    try {
      let submitReviewResponse = await requester.postReview(formDetails);
      console.log(submitReviewResponse);
      setSubmitSuccess(true);
    } catch (err) {
      console.error('Error with posting data to API: ', err);
    }
    console.log('Submission process is over');
    setUnderSubmission(false);
  };

  const content = (
    <>
      <h2> Write Your Review </h2>
      <h3> About the {data.product.name}</h3>
      <form onSubmit={validateForm}>
        <div id="review-form-rating">
          <h4> Overall Rating </h4>
          <DrawDynamicStars handleOnChange={handleOnChange}/>
          <div className="error-message">{formErrorMessages.rating_errorMsg}</div>
        </div>

        <div>
          <h4> Recommendation </h4>
          <Recommendation handleOnChange={handleOnChange} />
          <div className="error-message">{formErrorMessages.recommend_errorMsg}</div>
        </div>

        <div>
          <h4> Characteristics </h4>
          <Characteristics handleOnChange={handleOnChange} />
        </div>

        <div>
          <h4> Summary and Body </h4>
          <SummaryAndBody handleOnChange={handleOnChange} formErrorMessages={formErrorMessages}/>
        </div>

        <div>
          <h4> Upload Photos </h4>
          <UploadPhotos handleOnChange={handleOnChange} />
        </div>

        <div>
          <h4> Personal Information </h4>
          <PersonalInfo handleOnChange={handleOnChange} formErrorMessages={formErrorMessages}/>
        </div>
        {submitSuccess === false
          ?
          <>
            <button name="form-submit" type="submit" disabled={underSubmission} >Submit Review</button>
          </>
          : <div > Review has been submitted </div>
        }
      </form>
    </>
  );

  return (
    <Modal content={content}/>
  );
};

export default ReviewForm;