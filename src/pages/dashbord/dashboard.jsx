import React from 'react'
import { NavLink } from 'react-router-dom'

const Dashboard = () => {

  const logOut = () => {
    localStorage.clear();
    window.location.reload();
}
  return (

        <div class="nav_menu" id="nav">
          <h1>Wellcome to Dashboard</h1>
        <ul>
    
                 <li><NavLink to="/">Home</NavLink></li>    
                 <li><NavLink to="/about">About</NavLink></li>    
                 <li><NavLink to="/blog">Blog</NavLink></li>    
                 <li><NavLink to="/contact">Contact</NavLink></li>    
                 <li><NavLink to="/Login">Login</NavLink></li>
                 <li><NavLink to="/signup">signup</NavLink></li>         
                 <li><NavLink to="/#" onClick={()=>{logOut()}}>Logout</NavLink></li>         
             </ul>                                              
         </div>
      )
    }
    
export default Dashboard
