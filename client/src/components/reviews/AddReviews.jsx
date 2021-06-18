import React, { useState } from 'react';
import withClickReporting from '../../helpers/withClickReporting.js';
import ReviewForm from './review_form/01_ReviewForm.jsx';

const AddReviews = ({reportClick, data}) => {

  const [showModal, setShowModal] = useState(false);

  const ReviewFormWithClickReporting = withClickReporting(ReviewForm, 'ReviewForm');
  return (
    <>
      <button value={Number(data.reviewsMeta.product_id)} onClick={(e) => { setShowModal(current => !current); if (reportClick) { reportClick(e); } }}> Add Reviews + </button>
      {showModal ? <ReviewFormWithClickReporting data={data}/> : null}
    </>
  );
};

export default AddReviews;