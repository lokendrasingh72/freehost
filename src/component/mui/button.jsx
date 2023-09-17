import React from 'react'
import { Button } from '@mui/material'

const CustomButton = (props) => {

    const {visible,children,...remainingprops} =props
    if(visible === false){

        return null
    }
  return <Button  {...props} children = {children.toUpperCase()}/>
 
  
}

export default CustomButton
