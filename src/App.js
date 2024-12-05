import React from 'react'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import RouteLayout from './ui/RouteLayout'
import About from './features/About'
import Home from './features/Home'
import SignUpForm from './features/auth/SignUpForm'
import LoginForm from './features/auth/LoginForm'
import Notice from './features/notice/Notice'
import AddNotice from './features/notice/AddNotice'

const router = createBrowserRouter([{
  path:'/',
  element:<RouteLayout/>,
  children:[
    {index:true,element:<Home/>},
    {
path:'about',element:<About/>,

  },

{path:'addnotice',element:<AddNotice/>},
{path:'login',element:<LoginForm/>},
{path:'signup',element:<SignUpForm/>},
{path:'notice',element:<Notice/>},
{path:'admin',element:<Home/>}


]
}])

const App = () => {


  return <RouterProvider router= {router}/>
}

export default App
