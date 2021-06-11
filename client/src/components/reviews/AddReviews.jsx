import React, { useState } from 'react';
import ModalReview from './ModalReview.jsx';

const AddReviews = ({data}) => {

  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button value={Number(data.reviewsMeta.product_id)} onClick={() => setShowModal(current => !current)}> Add Reviews + </button>
      {showModal ? <ModalReview data={data}/> : null}
    </>
  );
};

export default AddReviews;