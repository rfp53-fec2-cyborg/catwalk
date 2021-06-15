import React, { useState, useEffect } from 'react';
import GalleryThumbnails from './GalleryThumbnails.jsx';
import arrowRight from '../../assets/arrow-right.svg';
import arrowLeft from '../../assets/arrow-left.svg';

const Gallery = ({ selectedStyle }) => {

  // State and local variables
  // Strictly speaking, this is an anti-pattern. A piece of props is being saved to this component's state (mainImage). This led to a bug where the prop selectedStyle would change, but mainImage would not update. The ideal solution would be to store mainImage in the state of the parent component. I decided against that because the Gallery component is the only component that needs to use mainImage, and I didn't want to clutter the Overview component, which is already complex. The solution was to use the special key attribute on the invocation of the Gallery component in Overview. The style_id from selectedStyle is assigned to the key attribute, so when the selectedStyle changes, the key changes, and the Gallery component completely rerenders. Gallery's state is recomputed, and all is well. This solution would not be ideal if rerendering was expensive, but in this case, we will be rerendering most of the DOM elements anyways when selectedStyle changes.
  const photos = selectedStyle.photos;
  const [mainImage, setMainImage] = useState(photos[0]);
  const [mainImageIndex, setMainImageIndex] = useState(0);

  // Event handlers
  const handleImageArrowClick = (event) => {
    const direction = event.currentTarget.dataset.direction;
    console.log(direction);
    if (direction === 'right') {
      const newIndex = mainImageIndex + 1;
      if (newIndex < photos.length) {
        setMainImageIndex(newIndex);
        setMainImage(photos[newIndex]);
      }
    } else if (direction === 'left') {
      const newIndex = mainImageIndex - 1;
      if (newIndex >= 0) {
        setMainImageIndex(newIndex);
        setMainImage(photos[newIndex]);
      }
    }
  };

  const handleThumbnailClick = (event) => {
    const index = event.currentTarget.dataset.index;
    setMainImageIndex(index);
    setMainImage(photos[index]);
  };

  const Arrow = ({ direction, handleImageArrowClick, imgSrc }) => {
    return (
      <div
        className={`main-image-arrow fade-in ${direction}`}
        data-direction={direction}
        onClick={handleImageArrowClick}
      >
        <img src={imgSrc}></img>
      </div>
    );
  };

  return (
    <>
      <div className='gallery-thumbnails'>
        <GalleryThumbnails
          selectedThumbnail={mainImage.thumbnail_url}
          photos={photos}
          handleThumbnailClick={handleThumbnailClick}
        />
      </div>
      <div className='main-image-pane'>
        {
          mainImageIndex > 0 ?
            <Arrow
              direction='left'
              handleImageArrowClick={handleImageArrowClick}
              imgSrc={arrowLeft}
            /> :
            null
        }
        <img
          src={mainImage.url}
          className='main-image'
        >
        </img>
        {
          mainImageIndex < photos.length - 1 ?
            <Arrow
              direction='right'
              handleImageArrowClick={handleImageArrowClick}
              imgSrc={arrowRight}
            /> :
            null
        }
      </div>
    </>
  );
};

export default Gallery;