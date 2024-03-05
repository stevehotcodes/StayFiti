import React from 'react'
import '../../layouts/Header/Header.scss'
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
            <button className='sign-in-btn'>Sign in</button>
            <button>Get started</button>
        </div>
    </div>
  )
}

export default Header