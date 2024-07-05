import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router'
import Top from './Top'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
const RouteLayout = () => {
  return (
    <div>
      <Top/>
      <Header/>
      <Outlet/>
      <ToastContainer autoClose={1000} pauseOnHover={false} pauseOnFocusLoss={false} />
    </div>
  )
}

export default RouteLayout
