import React, { useState } from 'react';
import ReviewForm from './review_form/01_ReviewForm.jsx';

const AddReviews = ({data}) => {

  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button value={Number(data.reviewsMeta.product_id)} onClick={() => setShowModal(current => !current)}> Add Reviews + </button>
      {showModal ? <ReviewForm data={data}/> : null}
    </>
  );
};

export default AddReviews;