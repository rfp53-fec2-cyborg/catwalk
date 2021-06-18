import React from 'react';
import LazyImage from '../shared/LazyImage.jsx';

const GalleryThumbnails = ({ selectedThumbnail, photos, handleThumbnailClick }) => {
  const thumbnailsHtml = photos.map((photo, index) => {
    return (
      <div
        className={
          selectedThumbnail === photo.thumbnail_url ?
            'gallery-thumbnail-container current-photo' :
            'gallery-thumbnail-container'
        }
        onClick={handleThumbnailClick}
        data-index={index}
        data-thumbnail-url={photo.thumbnail_url}
        key={`gallery_thumbnail_${index}`}
      >
        <LazyImage
          src={photo.thumbnail_url}
          className='gallery-thumbnail'
          alt="Thumbnail picture of different styles"
        />
      </div>);
  });

  return (
    <>
      {thumbnailsHtml}
    </>
  );
};

export default GalleryThumbnails;