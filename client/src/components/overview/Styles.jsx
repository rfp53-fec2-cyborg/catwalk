import React from 'react';
import StylesRow from './StylesRow.jsx';
import SizeSelector from './SizeSelector.jsx';

const Styles = ({ styles, selectedStyle, handleStyleClick, handleSkuSelection }) => {

  const NUM_COLS = 4;

  const skusToArray = (skus) => {
    const skusArray = [];
    for (const id in skus) {
      skusArray.push({
        id,
        quantity: skus[id].quantity,
        size: skus[id].size
      });
    }
    return skusArray;
  };

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
      <SizeSelector
        skus={skusToArray(selectedStyle.skus)}
        handleSkuSelection={handleSkuSelection}
      />
    </div>
  );
};

export default Styles;