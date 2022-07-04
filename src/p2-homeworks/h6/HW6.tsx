import React, { useState } from 'react';
import SuperEditableSpan from './common/c4-SuperEditableSpan/SuperEditableSpan';
import SuperButton from '../h4/common/c2-SuperButton/SuperButton';
import { restoreState, saveState } from './localStorage/localStorage';
import style from './HW6.module.css';

function HW6() {
  const [value, setValue] = useState<string>('');

  const save = () => {
    saveState<string>('editable-span-value', value);
  };
  const restore = () => {
    setValue( restoreState<string>('editable-span-value', 'hello world'));
  };

  return (
    <div>
      <h3 className="homework-title">homeworks 6</h3>
      <div>
        <SuperEditableSpan
          value={value}
          onChangeText={setValue}
          spanProps={{ children: value ? undefined : 'enter text...' }}
        />
      </div>
      <div className={style['button-box']}>
        <SuperButton onClick={save}>save</SuperButton>
        <SuperButton onClick={restore}>restore</SuperButton>
      </div>

      <hr />
    </div>
  );
}

export default HW6;
