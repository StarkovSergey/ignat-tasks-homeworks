import React from 'react'
import './App.css'
import HW5 from '../../../p2-homeworks/h5-rrd-v6/HW5';
import { useSelector } from 'react-redux'
import { AppStoreType } from '../../../p2-homeworks/h10/bll/store'
import { ThemeStateType } from '../../../p2-homeworks/h12/bll/themeReducer'

function App() {
  const theme = useSelector<AppStoreType, ThemeStateType>((state) => state.theme).currentTheme

    return (
        <div className={`App ${[theme]}`}>
            <HW5/>
        </div>
    )
}

export default App
