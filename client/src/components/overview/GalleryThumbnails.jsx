import React from 'react';

const GalleryThumbnails = ({ selectedThumbnail, images, handleThumbnailClick }) => {
  const thumbnailsHtml = images.map((image, index) => {
    return (
      <div
        className={
          selectedThumbnail === image.thumbnail_url ?
            'gallery-thumbnail-container current-photo' :
            'gallery-thumbnail-container'
        }
        onClick={handleThumbnailClick}
        data-index={index}
        data-thumbnail-url={image.thumbnail_url}
        key={`gallery_thumbnail_${index}`}
      >
        <img
          src={image.thumbnail_url}
          className='gallery-thumbnail'
        >
        </img>
      </div>);
  });

  return (
    <div className='gallery-thumbnails'>
      {thumbnailsHtml}
    </div>
  );
};

export default GalleryThumbnails;