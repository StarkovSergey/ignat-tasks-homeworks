import React, { ChangeEvent, KeyboardEvent, KeyboardEventHandler } from 'react';
import style from './Greeting.module.css';
import SuperButton from '../h4/common/c2-SuperButton/SuperButton';
import SuperInputText from '../h4/common/c1-SuperInputText/SuperInputText';

type GreetingPropsType = {
  name: string
  setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void;
  keyDownHandler: (e: KeyboardEvent<HTMLInputElement>) => void;
  addUser: () => void;
  error: string
  totalUsers: number;
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = ({name, setNameCallback, addUser, error, totalUsers, keyDownHandler}) => {
  const inputClass = `${style['input-name']} ${error ? style.error : ''}`;
  const errorMessageClass = `${style['error-message']} ${error ? style.show : ''}`;

  return (
    <div className={style.box}>
      <SuperInputText />
      <input value={name} onChange={setNameCallback} onKeyDown={keyDownHandler} className={inputClass}/>
      <p className={errorMessageClass}>{error}</p>
      <SuperButton onClick={addUser} disabled={!name}>add</SuperButton>
      {/*<button className={style.button} onClick={addUser} disabled={!name}>add</button>*/}
      <span>{totalUsers}</span>
    </div>
  );
};

export default Greeting;
