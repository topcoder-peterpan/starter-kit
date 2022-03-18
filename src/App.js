import React from "react"
import { Outlet, Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux';

// components
import HeaderComponent from './Components/Header'
import FooterComponent from './Components/Footer'

const App = () => {
  const { logged_in } = useSelector((state) => state.authentication)

  return !logged_in ? <Navigate to='login' /> : (
    <div className="app">
      <HeaderComponent />
      <Outlet />
      <FooterComponent />
    </div>
  )
}

export default App