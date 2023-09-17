import React from 'react'
import { HeaderComponent } from '../includes/header.includes'

const PrivateRoute = ({Component}) => {
  let getToken = localStorage.getItem('token')
  if(getToken) {
    return <div>
      
      <HeaderComponent />
      <Component />
    </div>
  } else {
     window.location.href = '/login'
  }  
}

export default  PrivateRoute 







