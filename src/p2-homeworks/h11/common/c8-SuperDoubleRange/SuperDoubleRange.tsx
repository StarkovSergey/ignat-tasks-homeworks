import React from 'react'
import { Slider } from '@mui/material'

type SuperDoubleRangePropsType = {
    onChange: (event: Event, value: number | number[]) => void
    value: number | number[]
    // min, max, step, disable, ...
}

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {
      onChange, value,
        // min, max, step, disable, ...
    }
) => {
    // сделать самому, можно подключать библиотеки

    return (
        <>
          <Slider
            color={"secondary"}
            sx={{width: "300px", margin: "10px"}}
            value={value}
            onChange={onChange}
            valueLabelDisplay="auto"
          />
        </>
    )
}

export default SuperDoubleRange
