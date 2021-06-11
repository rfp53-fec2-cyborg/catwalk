import React from 'react';
import StylesRow from './StylesRow.jsx';
import SizeSelector from './SizeSelector.jsx';

const Styles = ({ styles, selectedStyle, handleStyleClick }) => {

  const NUM_COLS = 4;

  return (
    <div>
      <h4>
        STYLE > <span style={{fontWeight: '500'}}>{selectedStyle.name}</span>
      </h4>
      <table>
        <tbody>
          {styles.map((style, index) => {
            if (index % NUM_COLS === 0) {
              return <StylesRow
                key={`stylesRow_${index / 4}`}
                styles={styles.slice(index, index + NUM_COLS)}
                selectedStyle={selectedStyle}
                handleStyleClick={handleStyleClick}
              />;
            }
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Styles;