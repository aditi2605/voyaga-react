import React from 'react'
import { Link } from 'react-router-dom'
import video from '../video/northenlights.mp4'
import { useState} from 'react'

import PopularPlace from './PopularPlaces'
import SearchPlace from './SearchPlace'
import ShowAllPlaces from './ShowAllPlaces'
import Slide from './Slide'
import Footer from'./Footer'
// import Result from './Result'

import {RxHamburgerMenu} from 'react-icons/rx'





function Home() {

    // const homeRef = useRef(null);
    // const popularRef = useRef(null);
    // const searchRef = useRef(null);
    // const resultRef = useRef(null);

    const [showNavbar, setShowNavbar] = useState(false);

    const handleShowNavbar = () => {
      setShowNavbar(!showNavbar)
    }

    // const scrollToSection = () => {
    //   window.current?.scrollIntoView({ behavior: 'smooth' });
    // }


    

  return (
        <>
            <section className="showcase">
           


                <header>
                    <h2 className="logo">Voyage</h2>
                    <div className={`toggle ${showNavbar && 'active'}`}  onClick={handleShowNavbar}>
                             <RxHamburgerMenu />
                             
                            <div className={`nav-elements  ${showNavbar && 'active'}`}>
                                <ul>
                                    <li> < Link to=""onClick={() => {
                                         Home.current?.scrollIntoView({ behavior: 'smooth' });}}></Link>
                                        Home
                                    </li>
                                    <li>< Link to=""onClick={() => {
                                        PopularPlace.current?.scrollIntoView({ behavior: 'smooth' });}}></Link>PopularPlaces</li>
                                    <li>Search Places</li>
                                    <li>Contact Us</li>
                                </ul>
                            </div>
                        </div>
                </header>
                <video src={video} loop autoPlay={true} muted></video>
                <div className="overlay" > </div>
                <div className="text" >
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
            {/* <PopularPlace /> */}
            <section className='second-container'> <SearchPlace /> </section>
            <section className='middle-container'> <ShowAllPlaces /> </section>
            <section className='third-container'><Slide /></section>
            <section className='third-container'><Footer /></section>
            {/* <section className='third-container'> <Result /> </section> */}
               
        </>
  )
}

export default Home
