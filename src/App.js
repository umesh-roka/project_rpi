import React from 'react'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import RouteLayout from './ui/RouteLayout'
import About from './features/About'
import Home from './features/Home'
import SignUpForm from './features/auth/SignUpForm'
import LoginForm from './features/auth/LoginForm'

const router = createBrowserRouter([{
  path:'/',
  element:<RouteLayout/>,
  children:[
    {index:true,element:<Home/>},
    {
path:'about',element:<About/>,

  },
{path:'login',element:<LoginForm/>},
{path:'signup',element:<SignUpForm/>}

]
}])

const App = () => {


  return <RouterProvider router= {router}/>
}

export default App
