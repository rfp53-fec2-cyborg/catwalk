import React from 'react';
import SocialMediaButton from './SocialMediaButton.jsx';
import facebookIcon from '../../assets/facebook-icon.svg';
import twitterIcon from '../../assets/twitter-icon.svg';
import pinterestIcon from '../../assets/pinterest-icon.svg';

const SocialMedia = (props) => {
  const sites = [
    {
      url: 'https://www.facebook.com',
      icon: facebookIcon
    },
    {
      url: 'https://www.twitter.com',
      icon: twitterIcon
    },
    {
      url: 'https://www.pinterest.com',
      icon: pinterestIcon
    }
  ];

  return (
    <div>
      {sites.map(site => {
        return <SocialMediaButton url={site.url} icon={site.icon} />;
      })}
    </div>
  );
};

export default SocialMedia;