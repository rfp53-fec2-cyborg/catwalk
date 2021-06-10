import React from 'react';

const Styles = ({styles}) => {
  // rows of 4 (will do in CSS)
  // current selection
    // default first item selection
    // current selection indicated by overlaid checkmark
    // current selection has title above
    // change selection by clicking

  const cssStyle = {
    objectFit: 'cover',
    height: '80px',
    width: '80px',
    'borderRadius': '50%'
  };

  console.log(styles);
  return (

    <div>
      {styles.map((style, index) => {
        return <img
          key={style.style_id}
          src={style.photos[0].thumbnail_url}
          style={cssStyle}>
        </img>;
      })}
    </div>
  );
};

export default Styles;