import React from 'react';
import { AffairType } from './HW2';
import style from './Affairs.module.css';

type AffairPropsType = {
  affair: AffairType;
  deleteAffairCallback: (_id: number) => void;
};

function Affair(props: AffairPropsType) {
  const deleteCallback = () => {
    props.deleteAffairCallback(props.affair._id)
  };

  return (
    <div className={style.affair}>
      <b>{props.affair.name}</b>
      <span className={style.priority}>{props.affair.priority}</span>
      <button className={style['close-button']} onClick={deleteCallback}>X</button>
    </div>
  );
}

export default Affair;
