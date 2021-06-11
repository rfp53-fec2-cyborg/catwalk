import React, { useState } from 'react';
import Modal from '../shared/Modal.jsx';
import ModalReviewStars from './ModalReviewStars.jsx';

const ModalReview = ({data}) => {

  console.log('How many times this component is re-rendered ', data);

  const characteristics = data.reviewsMeta.characteristics;
  const [formCharacteristicFields, setSormCharacteristicFields] = useState(Object.keys(characteristics));
  const [formDetails, setFormDetails] = useState({
    rating: 0,
    isRecommended: false,
  });

  const handleOnChange = (key, value) => {
    setFormDetails({...formDetails, [key]: value});
  };

  const handleSubmitReview = () => {
    console.log('handleSubmitReview function is triggered ', formDetails);
  };


  const content = (
    <>
      <h2> Write Your Review </h2>
      <h3> About the {data.product.name}</h3>
      <form>
        <div id="review-form-rating">
          Overall Rating
          <ModalReviewStars />
        </div>

        <div id="review-form-recommendation">
          Do you recommend this product?
          <label forhtml="isRecommended"> Yes </label>
          <input type="radio" name="isRecommended" onChange={(e) => handleOnChange(e.target.name, true)}/>
          <label forhtml="isRecommended"> No </label>
          <input type="radio" name="isRecommended" onChange={(e) => handleOnChange(e.target.name, false)}/>
        </div>

      </form>
      <button type="submit" onClick={handleSubmitReview}> Submit Review </button>
    </>
  );

  return (
    <Modal content={content}/>
  );
};

export default ModalReview;