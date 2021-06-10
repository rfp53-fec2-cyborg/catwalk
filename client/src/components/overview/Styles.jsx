import React from 'react';
import StylesRow from './StylesRow.jsx';

const Styles = ({styles}) => {
  // TODO
  // [current selection] default first item selection
  // [current selection] indicated by overlaid checkmark
  // [current selection] has title above
  // [current selection] change selection by clicking
  const NUM_COLS = 4;

  return (
    <div>
      <table>
        <tbody>
          {styles.map((style, index) => {
            if (index % NUM_COLS === 0) {
              return <StylesRow
                key={`stylesRow_${index / 4}`}
                styles={styles.slice(index, index + NUM_COLS)}
              />;
            }
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Styles;