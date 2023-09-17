import React from "react";
import AboutComponent from "../pages/about/About";
import LoginComponent from "../pages/user/login"
import AboutComponent from "../pages/about/About";
import BlogComponent from "../pages/blog/Blog";
import { Dashboard } from "@mui/icons-material";
import CreateAccountComponent from "../pages/user/createaccount";


const PageNotFound = React.lazy(() => import('../../src/pages/error/PageNotFound'))


const typeRoutes = () => {
   const routes = [{
      path: '/dashboard',
      element: <Dashboard/>,
      type : 'private',
      title: ''
    },{
    path: '/',
    element: <HomeComponent/>,
    type : 'private',
    title: ''
  },
    {
      path: '/login',
      element: <LoginComponent/>,
      type : 'public',
      title: ''
    },
    {
      path: '/signup',
      element: <CreateAccountComponent/>,
      type : 'public',
      title: ''
    },
    {
      path: '/about',
      element: <AboutComponent/>,
      type : 'public',
      title: ''
    },
    {
      path: '/contact',
      element: <ContactComponent/>,
      type : 'public',
      title: ''
    },{
    element: <PageNotFound />,
    path: '*',
    title: '404 Not Found',
    type: 'public',
  },{
    element: <ForbiddenAccess />,
    path: '/forbidden-access',
    title: '403 Forbidden Access',
    type: 'public'
  }]

    return  routes;
  }

  export default typeRoutes;