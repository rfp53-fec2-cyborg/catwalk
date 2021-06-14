import React, { useState } from 'react';
import IndividualCharacteristic from './04.1_IndividualCharacteristic.jsx';
import { storeCharacteristicsInArray } from '../../../helpers/ObjectIntoArray.js';

const Characteristics = ({reviewsMeta}) => {

  const [formCharacteristics, setSormCharacteristics] = useState(storeCharacteristicsInArray(reviewsMeta.characteristics));

  return (
    <>
      {formCharacteristics.map((value, index) =>
        <div key={value.details.id}> {value.characteristic}
          <IndividualCharacteristic value={value}/>
        </div>
      )}
    </>
  );
};

export default Characteristics;