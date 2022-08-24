import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import SuperCheckbox from '../h4/common/c3-SuperCheckbox/SuperCheckbox'
import React, { useState } from 'react'
import { requestsAPI } from './requests-api'

export function Request() {
  const [checked, setChecked] = useState<boolean>(false)
  const [data, setData] = useState<any>()

  const sendData = () => {
    requestsAPI.sendCheckboxValue((checked))
      .then((data) => {
        console.log(data)
        setData(data)
      })
  }

  return <div>
    <h3 className="homework-title">homeworks 13</h3>
    <div style={{display: "flex", gap: "10px", padding: "10px 0"}}>
      <SuperCheckbox checked={checked} onChange={() => setChecked(!checked)}/>
      <SuperButton onClick={sendData}>send</SuperButton>
    </div>
    <div>{JSON.stringify(data)}</div>
  </div>
}
