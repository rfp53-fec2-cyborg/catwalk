import React from 'react';

const SocialMediaButton = ({url, icon}) => {
  const style = {
    height: '20px',
    width: '20px'
  };

  return (
    <a href={url} target="_blank">
      <img style={style} src={icon} />
    </a>
  );
};

export default SocialMediaButton;