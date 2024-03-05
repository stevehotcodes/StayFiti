import React from 'react'
import '../Footer/Footer.scss'
import { FaMobileRetro } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { IoLogoTiktok } from "react-icons/io5";

const Footer = () => {
  return (
    <div className='footer-container'>
    
        <div className='logo-get-started-wrapper'>
            <div className="logo">
                <span>StayFiti</span>
            </div>

            <div className='get-started-wrapper'>
                <span className='ready-statement'>Ready to get started?</span>

                <div className="get-started-btn">
                    <span>Get started for free</span>
                </div>
            </div>
            
        </div>

        <div className='all-pages-contacts'>
            <div className="all-pages">
                <h3>All Pages</h3>
                <span>Services</span>
                <span>Testimonies </span>
                <span>Contacts </span>
            </div>
            <div className='contacts'>
                <h3>Contacts via:</h3>
                <div className="contact-icon">
                    
                       <FaMobileRetro />
                        <span>+254704453499</span>
                </div>
            
            <div className="contact-icon">
                <FaWhatsapp />
                <span>070445657688</span>
                    
            </div>
            <div className="contact-icon">
                 <IoLogoTiktok />
                 <span>StayFiti</span>
            </div>
                
            </div>
        </div>




    </div>
    
  )
}

export default Footer