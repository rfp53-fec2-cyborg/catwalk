import React from 'react';

const AddReviews = ({reviewsMeta}) => {
  console.log(reviewsMeta);
  console.log(reviewsMeta.characteristics);

  const triggerFormModal = (e) => {
    console.log(e.target.value);
  };

  return (
    <>
      <button value={Number(reviewsMeta.product_id)} onClick={triggerFormModal}> Add Reviews + </button>
    </>
  );
};

export default AddReviews;