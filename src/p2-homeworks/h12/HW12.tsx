import React from 'react'
import SuperRadio from '../h7/common/c6-SuperRadio/SuperRadio'
import { useDispatch, useSelector } from 'react-redux'
import { AppStoreType } from '../h10/bll/store'
import { changeThemeAC, ThemeStateType, ThemeType } from './bll/themeReducer'

const themes: ThemeType[] = ['dark', 'red', 'some']

function HW12() {
  const theme = useSelector<AppStoreType, ThemeStateType>((state) => state.theme).currentTheme

  const dispatch = useDispatch()

  const themeChangeHandler = (theme: ThemeType) => {
    dispatch(changeThemeAC(theme))
  }

  return (
    <div>
      <hr />
        <h3 className="homework-title">homeworks 12</h3>

      <SuperRadio options={themes} value={theme} onChangeOption={themeChangeHandler}/>

      <hr />
    </div>
  )
}

export default HW12
