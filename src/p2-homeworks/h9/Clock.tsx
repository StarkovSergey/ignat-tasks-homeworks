import React, { useState } from 'react';
import SuperButton from '../h4/common/c2-SuperButton/SuperButton';
import style from './Clock.module.css'

function Clock() {
  const [timerId, setTimerId] = useState<number>(0);
  const [date, setDate] = useState<Date>(new Date());
  const [show, setShow] = useState<boolean>(false);

  const stop = () => {
    clearInterval(timerId)
  };
  const start = () => {
    stop();
    const id: number = window.setInterval(() => {
      setDate(new Date())
    }, 1000);
    setTimerId(id);
  };

  const onMouseEnter = () => {
    setShow(true)
  };
  const onMouseLeave = () => {
    setShow(false)
  };

  const hours = date.getHours()
  const minutes = date.getMinutes()
  const seconds = date.getSeconds()
  const getTwoNumbersTime = (time: number) => {
    if (String(time).length === 1) {
      return `0${time}`
    }
    return time
  }

  const stringTime = `${getTwoNumbersTime(hours)}:${getTwoNumbersTime(minutes)}:${getTwoNumbersTime(seconds)}`
  const stringDate = `${date.getDate()} ${date.getMonth() + 1} ${date.getFullYear()}`; // fix with date

  return (
    <div>
      <div onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} className={style['clock-box']}>
        <div>
          {stringTime}
        </div>

        {show && <div>{stringDate}</div>}</div>

      <SuperButton onClick={start}>start</SuperButton>
      <SuperButton onClick={stop}>stop</SuperButton>
    </div>
  );
}

export default Clock;
