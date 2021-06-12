import React, { useState, useEffect } from 'react';
import Modal from '../../shared/Modal.jsx';
import { usePrevious } from '../../shared/usePreviousHook.jsx';
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

// const testData = {
//   'product_id': 17067,
//   'rating': 4,
//   'summary': 'Works amazing with PS4',
//   'body': 'I was looking for a keyboard/mouse set to play some games on my PS4 (trying to get used to it before getting a PC) and this set is exactly what I wanted. It works flawlessly, all I had to do was plug it in. No adaptor, no extra USB hub... nothing. It works GREAT right out of the box!',
//   'recommend': false,
//   'name': 'Random user',
//   'email': 'random@random.com',
//   'photos': [],
//   'characteristics': {}
// };

const ReviewForm = ({data}) => {

  const characteristics = data.reviewsMeta.characteristics;

  const [formCharacteristicFields, setSormCharacteristicFields] = useState(Object.keys(characteristics));
  const [underSubmission, setUnderSubmission] = useState(false);
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
    'isErrorFree': null,
    'error_rating': '',
    'error_recommend': '',
    'error_summary': '',
    'error_body': '',
    'error_name': '',
    'error_email': '',
    // 'error_photos': '',
    // 'error_characteristics': '',
  });

  const handleOnChange = (key, value) => {
    setFormDetails({...formDetails, [key]: value});
  };

  const validateForm = async (e) => {
    e.preventDefault();

    setUnderSubmission(true);
    if (formDetails.rating === 0) {
      await setFormErrorMessages(prevErrMsg => { return {...prevErrMsg, 'isErrorFree': false, 'error_rating': 'Rating is required.'}; });
    } else {
      await setFormErrorMessages(prevErrMsg => { return {...prevErrMsg, 'isErrorFree': true }; });
    }
    if (typeof formDetails.recommend !== 'boolean') {
      await setFormErrorMessages(prevErrMsg => { return {...prevErrMsg, 'isErrorFree': false, 'error_recommend': 'Recommendation is required.'}; });
    } else {
      await setFormErrorMessages(prevErrMsg => { return {...prevErrMsg, 'isErrorFree': true }; });
    }
    if (formDetails.summary.length < 1) {
      await setFormErrorMessages(prevErrMsg => { return {...prevErrMsg, 'isErrorFree': false, 'error_summary': 'Summary is required.'}; });
    } else {
      await setFormErrorMessages(prevErrMsg => { return {...prevErrMsg, 'isErrorFree': true }; });
    }
    if (formDetails.body.length < 50) {
      await setFormErrorMessages(prevErrMsg => { return {...prevErrMsg, 'isErrorFree': false, 'error_body': 'Body is required.'}; });
    } else {
      await setFormErrorMessages(prevErrMsg => { return {...prevErrMsg, 'isErrorFree': true }; });
    }
    if (formDetails.name.length < 1) {
      await setFormErrorMessages(prevErrMsg => { return {...prevErrMsg, 'isErrorFree': false, 'error_name': 'Name is required.'}; });
    } else {
      await setFormErrorMessages(prevErrMsg => { return {...prevErrMsg, 'isErrorFree': true }; });
    }
    if (formDetails.email.indexOf('@') === -1) {
      await setFormErrorMessages(prevErrMsg => { return {...prevErrMsg, 'isErrorFree': false, 'error_email': 'Valid email address is required.'}; });
    } else {
      await setFormErrorMessages(prevErrMsg => { return {...prevErrMsg, 'isErrorFree': true }; });
    }
    submitForm();
  };

  const prevErrorState = usePrevious(formErrorMessages);

  const submitForm = async () => {
    console.log(prevErrorState);
    if (prevErrorState.isErrorFree) {
      try {
        let submitReviewResponse = await requester.postReview(formDetails);
        console.log(submitReviewResponse);
      } catch (err) {
        console.error('Error with posting data to API: ', err);
      }
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
          <div className="error-message">{formErrorMessages.error_rating}</div>
        </div>

        <div>
          <h4> Recommendation </h4>
          <Recommendation handleOnChange={handleOnChange} />
          <div className="error-message">{formErrorMessages.error_recommend}</div>
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
        <button type="submit" disabled={underSubmission} > Submit Review </button>
      </form>
      {/* <button type="submit" onClick={() => submitForm(testData)}> FOR TESTING SUBMIT TEST DATA </button> */}
    </>
  );

  return (
    <Modal content={content}/>
  );
};

export default ReviewForm;