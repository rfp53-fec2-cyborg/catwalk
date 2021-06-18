import React, { useState, useEffect } from 'react';
import GalleryThumbnails from './GalleryThumbnails.jsx';
import arrowRight from '../../assets/arrow-right.svg';
import arrowLeft from '../../assets/arrow-left.svg';
import arrowUp from '../../assets/arrow-up.svg';
import arrowDown from '../../assets/arrow-down.svg';
import LazyImage from '../shared/LazyImage.jsx';

const Gallery = ({ selectedStyle, reportClick }) => {

  // State and local variables
  // Strictly speaking, this is an anti-pattern. A piece of props is being saved to this component's state (mainImage). This led to a bug where the prop selectedStyle would change, but mainImage would not update. The ideal solution would be to store mainImage in the state of the parent component. I decided against that because the Gallery component is the only component that needs to use mainImage, and I didn't want to clutter the Overview component, which is already complex. The solution was to use the special key attribute on the invocation of the Gallery component in Overview. The style_id from selectedStyle is assigned to the key attribute, so when the selectedStyle changes, the key changes, and the Gallery component completely rerenders. Gallery's state is recomputed, and all is well. This solution would not be ideal if rerendering was expensive, but in this case, we will be rerendering most of the DOM elements anyways when selectedStyle changes.
  const photos = selectedStyle.photos;
  const THUMBNAIL_HEIGHT_PX = 60;
  const THUMBNAIL_GUTTER_PX = 20;
  const thumbnailsMaxScrollHeight =
    THUMBNAIL_HEIGHT_PX * photos.length +
    THUMBNAIL_GUTTER_PX * (photos.length - 1);
  const thumbnailScrollIncrement =
    THUMBNAIL_HEIGHT_PX * 7 +
    THUMBNAIL_GUTTER_PX * 6;

  const [mainImage, setMainImage] = useState(photos[0]);
  const [mainImageIndex, setMainImageIndex] = useState(0);
  const [thumbnailScroll, setThumbnailScroll] = useState(0);

  // Effects
  useEffect(() => {
    setMainImage(photos[mainImageIndex]);
  }, [mainImageIndex]);

  // Event handlers
  let handleThumbnailArrowClick = (event) => {
    const direction = event.currentTarget.dataset.direction;
    if (direction === 'down' && thumbnailScroll + thumbnailScrollIncrement < thumbnailsMaxScrollHeight) {
      setThumbnailScroll(thumbnailScroll + thumbnailScrollIncrement);
    } else if (direction === 'up' && thumbnailScroll - thumbnailScrollIncrement >= 0) {
      setThumbnailScroll(thumbnailScroll - thumbnailScrollIncrement);
    }
    if (reportClick) { reportClick(event); }
  };

  let handleImageArrowClick = (event) => {
    const direction = event.currentTarget.dataset.direction;
    if (direction === 'right' && mainImageIndex + 1 < photos.length) {
      setMainImageIndex(mainImageIndex + 1);
    } else if (direction === 'left' && mainImageIndex - 1 >= 0) {
      setMainImageIndex(mainImageIndex - 1);
    }
    if (reportClick) { reportClick(event); }
  };

  let handleThumbnailClick = (event) => {
    const index = event.currentTarget.dataset.index;
    setMainImageIndex(index);
    if (reportClick) { reportClick(event); }
  };

  const Arrow = ({ direction, clickHandler, classStr, imgSrc }) => {
    return (
      <div
        className={`${classStr} ${direction}`}
        data-direction={direction}
        onClick={clickHandler}
      >
        <LazyImage src={imgSrc} alt="Direction arrow"/>
      </div>
    );
  };

  return (
    <>
      <div className='gallery-thumbnails'>
        <Arrow
          direction='up'
          clickHandler={handleThumbnailArrowClick}
          classStr='thumbnails-arrow fade-in'
          imgSrc={arrowUp}
        />
        <div className='gallery-thumbnails-viewport'>
          <div
            className='gallery-thumbnails-all'
            style={{ 'transform': `translate(0, -${thumbnailScroll}px)` }}>
            <GalleryThumbnails
              selectedThumbnail={mainImage.thumbnail_url}
              photos={photos}
              handleThumbnailClick={handleThumbnailClick}
            />
          </div>
        </div>
        <Arrow
          direction='down'
          clickHandler={handleThumbnailArrowClick}
          classStr='thumbnails-arrow fade-in'
          imgSrc={arrowDown}
        />
      </div>
      <div className='main-image-pane'>
        {
          mainImageIndex > 0 ?
            <Arrow
              direction='left'
              clickHandler={handleImageArrowClick}
              classStr='main-image-arrow fade-in'
              imgSrc={arrowLeft}
            /> :
            null
        }
        <img
          src={mainImage.url}
          className='main-image'
          alt="Main product image"
        >
        </img>
        {
          mainImageIndex < photos.length - 1 ?
            <Arrow
              direction='right'
              clickHandler={handleImageArrowClick}
              classStr='main-image-arrow fade-in'
              imgSrc={arrowRight}
            /> :
            null
        }
      </div>
    </>
  );
};

export default Gallery;