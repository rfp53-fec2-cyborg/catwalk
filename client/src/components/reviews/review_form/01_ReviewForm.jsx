import React, { useState, useEffect } from 'react';
import Modal from '../../shared/Modal.jsx';
import DrawDynamicStars from './02_DrawDynamicStars.jsx';
import Recommendation from './03_Recommendation.jsx';
import Characteristics from './04_Characteristics.jsx';
import SummaryAndBody from './05_SummaryAndBody.jsx';
import BodyWordCount from './05.1_BodyWordCount.jsx';
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
  'body_errorMsg': 'Minimum of 50 characters is required.',
  'name_errorMsg': 'Name is required.',
  'email_errorMsg': 'Valid email address is required.',
};

const ReviewForm = ({data, reportClick}) => {

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
    if (reportClick) { reportClick(e); }
  };

  const submitForm = async () => {
    try {
      let submitReviewResponse = await requester.postReview(formDetails);
      setSubmitSuccess(true);
    } catch (err) {
      console.error('Error with posting data to API: ', err);
    }
    // console.log('Submission process is over');
    setUnderSubmission(false);
  };

  const content = (
    <div className="modal-body">
      <h2> Write Your Review </h2>
      <h3> About the {data.product.name}</h3>
      <form onSubmit={validateForm} >
        <div id="review-form-rating" className="form-section">
          <h4> Overall Rating </h4>
          <DrawDynamicStars handleOnChange={handleOnChange}/>
          <div className="error-message">{formErrorMessages.rating_errorMsg}</div>
        </div>

        <div className="form-section">
          <h4> Recommendation </h4>
          <Recommendation handleOnChange={handleOnChange} />
          <div className="error-message">{formErrorMessages.recommend_errorMsg}</div>
        </div>

        <div className="form-section">
          <h4> Characteristics </h4>
          <Characteristics formDetails={formDetails} handleOnChange={handleOnChange} reviewsMeta={data.reviewsMeta}/>
        </div>

        <div className="form-section">
          <h4> Summary and Body </h4>
          <SummaryAndBody handleOnChange={handleOnChange} formErrorMessages={formErrorMessages} formDetails={formDetails}/>
          <BodyWordCount formDetailsBodyLength={formDetails.body.length}/>
        </div>

        <div className="form-section">
          <h4> Upload Photos </h4>
          <UploadPhotos formDetails={formDetails} handleOnChange={handleOnChange} />
        </div>

        <div className="form-section">
          <h4> Personal Information </h4>
          <PersonalInfo handleOnChange={handleOnChange} formErrorMessages={formErrorMessages}/>
        </div>
        {submitSuccess === false
          ?
          <div className="modal-button" >
            <button type="submit" name="submit" value="submit-form" disabled={underSubmission} >Submit Review</button>
          </div>
          : <div > Review has been submitted </div>
        }
      </form>
    </div>
  );

  return (
    <Modal content={content}/>
  );
};

export default ReviewForm;