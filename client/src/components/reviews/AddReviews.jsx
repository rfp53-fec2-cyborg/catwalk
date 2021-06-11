import React, { useState } from 'react';
import ModalReview from './ModalReview.jsx';

const AddReviews = ({reviewsMeta}) => {

  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button value={Number(reviewsMeta.product_id)} onClick={() => setShowModal(current => !current)}> Add Reviews + </button>
      {showModal ? <ModalReview reviewsMeta={reviewsMeta}/> : null}
    </>
  );
};

export default AddReviews;