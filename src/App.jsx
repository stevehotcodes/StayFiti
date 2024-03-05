import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './layouts/Header/Header'
import Footer from './layouts/Footer/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='root-wrapper'>
       <Header/>
       <Footer/>
         
    </div>
  )
}

export default App
