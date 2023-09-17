import React from 'react'
import { TextField } from '@mui/material'

const CustomTextField = (props) => {

    const {label,required} =props
  return <>
    {label?<label>{label}{required?'*': null}</label>:null}

    <TextField  {...props}/>
      
    </>
  
}

export default CustomTextField
