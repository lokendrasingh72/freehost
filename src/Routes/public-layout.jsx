import React from 'react';
import { HeaderComponent } from '../includes/header.includes';



const PublicRoute = ({Component}) => {
  let getToken = localStorage.getItem('token') || null
  if(!getToken) {
    return <div>
      <HeaderComponent />
      <Component />
    </div>
  } else {
     window.location.href = '/dashboard'
  }  
}
export default PublicRoute;