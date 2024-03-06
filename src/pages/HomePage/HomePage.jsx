import React from 'react'
import '../HomePage/HomePage.scss'
import Header from '../../layouts/Header/Header'
import HeroBackgroundImage from '../../assets/hero-background-image.jpeg'
import HomeInterior from '../../assets/home-interiro.avif'
import Footer from '../../layouts/Footer/Footer'
import { FaCheck } from "react-icons/fa";


const HomePage = () => {
  return (
    <div className='home-page-container'>
       <Header/>
       <div className='hero-section'>
            <div className='overlay'>
                <img src={HeroBackgroundImage} alt="background image" />

            <div className='hero-text'>
                    <h3 className='company-name'>StayFiti</h3>
                    <p>"Where every room meets love"</p>  
            </div>


            </div>
           
       </div>
       <div className="services-section">
       <div className='overlay'>
                <img src={HomeInterior} alt="background image" />

            <div className='hero-text'>
                    <h3 className='company-name'>Discover Your New Home with Stay Fiti</h3>
                    <h3 className='our-services-title'>Our services</h3>
                    <div className='our-services'>
                        <div className='service'>
                        <FaCheck />
                            <p>Property Listing</p>
                        </div>
                        <div className='service'>
                        <FaCheck />
                            <p>Apartment Sales</p>
                        </div>

                        <div className='service'>
                        <FaCheck />
                            <p>Rental management</p>
                        </div>
                    </div>
            </div>


            </div>

       </div>

       <Footer/>




    </div>
  )
}

export default HomePage