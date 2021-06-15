import React, { useState } from 'react';
import IndividualCharacteristic from './04.1_IndividualCharacteristic.jsx';
import { storeCharacteristicsInArray } from '../../../helpers/ObjectIntoArray.js';

const Characteristics = (props) => {

  const [formCharacteristics, setSormCharacteristics] = useState(storeCharacteristicsInArray(props.reviewsMeta.characteristics));

  return (
    <>
      {formCharacteristics.map((value, index) =>
        <label key={value.details.id}> {value.characteristic}
          <IndividualCharacteristic formDetails={props.formDetails} value={value} handleOnChange={props.handleOnChange}/>
        </label>
      )}
    </>
  );
};

export default Characteristics;