import React from 'react'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import LoginComponent from '../pages/user/login'
import HomeComponent from '../pages/home/home'
import PageNotFound from '../pages/error/PageNotFound'
import PrivateRoute from './private-layout'
import PublicRoute from './public-layout'
import AboutComponent from '../pages/about/About'
import ContactComponent from '../pages/contact/Contact'
import Dashboard from '../pages/dashbord/dashboard'
import CreateAccountComponent from '../pages/user/createaccount'

const MainLayout = () => {
  return (
    
    <BrowserRouter>
    <Routes>
      <Route path='/dashboard' element={<PrivateRoute Component={Dashboard}/>}/>
      <Route path='/' element={<PrivateRoute Component={HomeComponent}/>}/>
      <Route path='/about' element={<AboutComponent />}/>
      <Route path='/contact' element={<ContactComponent />}/>
      <Route path='/login' element={<PublicRoute Component={LoginComponent}/>}/>
      <Route path='/signup' element={<PublicRoute Component={CreateAccountComponent}/>}/>
      <Route path='*' element={<PageNotFound />}/>
    
    </Routes>
    </BrowserRouter>
  )
}


export default MainLayout
