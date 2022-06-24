import React, { ChangeEvent, KeyboardEvent, KeyboardEventHandler } from 'react';
import style from './Greeting.module.css';
import SuperButton from '../h4/common/c2-SuperButton/SuperButton';
import SuperInputText from '../h4/common/c1-SuperInputText/SuperInputText';

type GreetingPropsType = {
  name: string
  keyDownHandler: (e: KeyboardEvent<HTMLInputElement>) => void;
  addUser: () => void;
  error: string
  totalUsers: number;
  setName: (name: string) => void;
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = ({name, addUser, error, totalUsers, keyDownHandler, ...props}) => {
  const inputClass = `${style['input-name']} ${error ? style.error : ''}`;

  return (
    <div className={style.box}>
      <SuperInputText onChangeText={props.setName} onEnter={() => {addUser()}}  error={error}/>
      {/*<input value={name} onChange={setNameCallback} onKeyDown={keyDownHandler} className={inputClass}/>*/}
      <SuperButton onClick={addUser} disabled={!name}>add</SuperButton>
      {/*<button className={style.button} onClick={addUser} disabled={!name}>add</button>*/}
      <span>{totalUsers}</span>
    </div>
  );
};

export default Greeting;
