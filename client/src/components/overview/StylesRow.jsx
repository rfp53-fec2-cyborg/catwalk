import React from 'react';
import checkmark from '../../assets/checkmark.svg';

const StylesRow = ({ styles, selectedStyle, handleStyleClick }) => {

  const cssStyleThumbnail = {
    objectFit: 'cover',
    height: '80px',
    width: '80px',
    borderRadius: '50%'
  };

  const cssStyleCheckmark = {
    height: '24px',
    width: '24px',
    borderRadius: '50%',
    backgroundImage: `url(${checkmark})`,
    backgroundColor: 'white',
    position: 'absolute',
    top: '0px',
    right: '0px',
    border: '1px solid #484848'
  };

  return (
    <tr>
      {styles.map(style => {
        return (
          <td key={style.style_id} style={{position: 'relative'}}>
            <img
              data-id={style.style_id}
              src={style.photos[0].thumbnail_url}
              style={cssStyleThumbnail}
              onClick={handleStyleClick}
            >
            </img>
            {selectedStyle === style.style_id.toString() ? <div style={cssStyleCheckmark}></div> : null}
          </td>
        );
      })}
    </tr>
  );
};

export default StylesRow;