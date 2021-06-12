import React from 'react';
import checkmark from '../../assets/checkmark.svg';

const StylesRow = ({ styles, selectedStyle, handleStyleClick }) => {

  return (
    <tr>
      {styles.map(style => {
        return (
          <td key={style.style_id} style={{position: 'relative'}}>
            <img
              data-id={style.style_id}
              className='style-thumbnail'
              src={style.photos[0].thumbnail_url}
              alt={`style_thumbnail_${style.style_id}`}
              onClick={handleStyleClick}
            ></img>
            {selectedStyle.style_id === style.style_id ?
              <div
                className="small-circle-checkmark"
              ></div> :
              null}
          </td>
        );
      })}
    </tr>
  );
};

export default StylesRow;