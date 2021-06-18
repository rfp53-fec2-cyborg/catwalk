import React from 'react';

const SocialMediaButton = ({url, icon}) => {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer" >
      <img
        className='social-media-button'
        src={icon}
        alt="Social media buttons including Facebook, Twitter, and Pinterest"
      />
    </a>
  );
};

export default SocialMediaButton;