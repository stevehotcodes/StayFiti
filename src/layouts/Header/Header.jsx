import React from 'react'
import '../../layouts/Header/Header.scss'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <div className='header-container'>
        <div className="header-logo">
          <span>StayFiti</span>
        </div>
        <div className="header-navigation">
             <span>Services</span>
             <span>Contacts</span>
             <span>Testimonies</span>
        </div>
        <div className="actions">
          <Link to='/login'>
            <button className='sign-in-btn'>Log in</button>
          
          </Link>
            <Link to='/signup'>
            
            <button  >Get started</button>
            </Link>
        </div>
    </div>
  )
}

export default Header