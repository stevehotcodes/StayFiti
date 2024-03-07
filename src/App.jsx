import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './layouts/Header/Header'
import Footer from './layouts/Footer/Footer'
import HomePage from './pages/HomePage/HomePage'
import Register from './pages/Register/Register'
=======
import Login from './pages/Login/Login'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='root-wrapper'>
       {/* <HomePage/> */}
       {/* <Footer/> */}

       <Register/>
       
         
       <Login/>       

    </div>
  )
}

export default App
