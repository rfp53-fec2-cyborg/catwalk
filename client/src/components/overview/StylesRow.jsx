import React from 'react';

const StylesRow = ({ styles, handleStyleClick }) => {

  const cssStyle = {
    objectFit: 'cover',
    height: '80px',
    width: '80px',
    'borderRadius': '50%'
  };

  return (
    <tr>
      {styles.map(style => {
        return (
          <td key={style.style_id}>
            <img
              data-id={style.style_id}
              src={style.photos[0].thumbnail_url}
              style={cssStyle}
              onClick={handleStyleClick}
            >
            </img>
          </td>
        );
      })}
    </tr>
  );
};

export default StylesRow;