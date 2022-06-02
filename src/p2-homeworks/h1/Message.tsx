import React from 'react';
import style from './Message.module.css';

type MessagePropsType = {
  avatar: string;
  name: string;
  message: string;
  time: string;
};

function Message(props: MessagePropsType) {
  return (
    <div className={style.message}>
      <div className={style.avatar}>
        <img src={props.avatar} alt="" />
      </div>
      <div className={style['text-box']}>
        <b className={style['user-name']}>{props.name}</b>
        <p className={style.text}>{props.message}</p>
        <time className={style.time}>{props.time}</time>
      </div>
    </div>
  );
}

export default Message;
