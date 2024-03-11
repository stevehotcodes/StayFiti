import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider}
  from "react-router-dom"
import HomePage from './pages/HomePage/HomePage.jsx'
import Signup from './pages/Signup/Signup.jsx'
import Login from './pages/Login/Login.jsx'
import Register from './pages/Register/Register.jsx'


  const router=createBrowserRouter([
    {
      path:"/",
      element:<HomePage/>,
      errorElement:<Error/>
    },
    {
      path:"/signup",
      element:<Signup/>
    },
    {
      path:"/login",
      element:<Login/>
    }

  ])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />

    
    {/* <App /> */}
  </React.StrictMode>,
)
