import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import video from '../video/northenlights.mp4'
import { useState } from 'react'


function Home() {

    const [showNavbar, setShowNavbar] = useState(false);

    const handleShowNavbar = () => {
      setShowNavbar(!showNavbar)
    }



    

  return (
        <>
            <section className="showcase">
                <header>
                    <h2 className="logo">Voyage</h2>
                    <div className={`toggle ${showNavbar && 'active'}`}  onClick={handleShowNavbar}>
                             
                            <div className={`nav-elements  ${showNavbar && 'active'}`}>
                                <ul>
                                    <li><NavLink to="/homepageindex.html">Home</NavLink></li>
                                    <li><NavLink to="/searchindex.html">Services</NavLink></li>
                                    <li><NavLink to="/popularplace">Popular Places</NavLink></li>
                                    <li><NavLink to="/popularplacesindex.html">Book Now</NavLink></li>
                                    <li><NavLink to="/contactus.html">Contact Us</NavLink></li>
                                </ul>
                            </div>
                    </div>    
                </header>
                <video src={video} loop autoPlay={true} muted></video>
                <div className="overlay"></div>
                <div className="text">
                    <h2>Never Stop </h2> 
                    <h3>Exploring The World</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    consequat.</p>
                    <Link to="/popolarplaces">Explore</Link>
                </div>
                <ul className="social">
                    <li><Link to="https://en-gb.facebook.com/"><img src="https://i.ibb.co/x7P24fL/facebook.png" alt='' /></Link></li>
                    <li><Link to="https://twitter.com/?lang=en"><img src="https://i.ibb.co/Wnxq2Nq/twitter.png" alt='' /></Link></li>
                    <li><Link to="https://www.instagram.com/"><img src="https://i.ibb.co/ySwtH4B/instagram.png" alt=''/></Link></li>
                </ul>
            </section> 
               
        </>
  )
}

export default Home
