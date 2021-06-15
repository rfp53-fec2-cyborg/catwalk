import React, { useState, useEffect } from 'react';
import GalleryThumbnails from './GalleryThumbnails.jsx';

const Gallery = ({ selectedStyle }) => {

  const photos = selectedStyle.photos;

  // State and local variables
  const [selectedImage, setSelectedImage] = useState(photos[0]);

  // Event handlers
  const handleThumbnailClick = (event) => {
    const index = event.currentTarget.dataset.index;
    setSelectedImage(photos[index]);
  };

  return (
    <>
      <GalleryThumbnails
        selectedThumbnail={selectedImage.thumbnail_url}
        images={photos}
        handleThumbnailClick={handleThumbnailClick}
      />
      <img
        src={selectedImage.url}
        className='main-photo'
      >
      </img>
    </>
  );
};

export default Gallery;