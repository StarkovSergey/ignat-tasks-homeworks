import React, { useState } from 'react';
import SuperRange from './common/c7-SuperRange/SuperRange';
import SuperDoubleRange from './common/c8-SuperDoubleRange/SuperDoubleRange';

function HW11() {
  const [arrayValue, setArrayValue] = useState<any>([0, 100])

  const changeValue1 = (value: number) => {
    setArrayValue([value, arrayValue[1]]);
  };

  const changeValue = (event: Event, value: number | number[]) => {
    setArrayValue(value)
  }

  return (
    <div>
      <h3 className="homework-title">homeworks 11</h3>

      {/*should work (должно работать)*/}
      <div>
        <span>{arrayValue[0]}</span>
        <SuperRange onChangeRange={changeValue1} value={arrayValue[0]}/>
      </div>

      <div>
        <span>{arrayValue[0]}</span>
        <SuperDoubleRange
          onChange={changeValue}
          value={arrayValue}
        />
        <span>{arrayValue[1]}</span>
      </div>
    </div>
  );
}

export default HW11;
