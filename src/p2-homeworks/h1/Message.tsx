import React from 'react';
import style from './Message.module.css';
import SuperEditableSpan from '../h6/common/c4-SuperEditableSpan/SuperEditableSpan';

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
        <div>
          <SuperEditableSpan spanProps={{ children: 'some text...' }}/>
        </div>
        <time className={style.time}>{props.time}</time>
      </div>
    </div>
  );
}

export default Message;
