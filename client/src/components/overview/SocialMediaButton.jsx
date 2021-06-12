import React from 'react';

const SocialMediaButton = ({url, icon}) => {
  return (
    <a href={url} target="_blank">
      <img
        className='social-media-button'
        src={icon}
      />
    </a>
  );
};

export default SocialMediaButton;