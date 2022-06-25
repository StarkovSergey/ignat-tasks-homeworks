import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './Header.module.css';

function Header() {
  return (
    <header className={style.header}>
      <div className={style['links-box']}>
        <ul className={style.list}>
          <li className={style['list-item']}>
            <NavLink to="/pre-junior">pre-junior</NavLink>
          </li>
          <li className={style['list-item']}>
            <NavLink to="/junior">junior</NavLink>
          </li>
          <li className={style['list-item']}>
            <NavLink to="/junior-plus">junior-plus</NavLink>
          </li>
        </ul>
        <div className={style['arrow-box']}>show links</div>
      </div>
    </header>
  );
}

export default Header;
