import React from 'react';

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
        <img
          src={photo.thumbnail_url}
          className='gallery-thumbnail'
        >
        </img>
      </div>);
  });

  return (
    <>
      {thumbnailsHtml}
    </>
  );
};

export default GalleryThumbnails;