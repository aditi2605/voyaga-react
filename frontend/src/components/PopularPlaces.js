import React from 'react'
import { Link } from 'react-router-dom'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import egypt from '../images/egypt.jpeg'
import portugal from '../images/portugal.jpeg'
import tajmahal from '../images/tajmahal.jpeg'
import turkey from '../images/turkey.jpeg'
import greece from '../images/greece.jpeg'
import france from '../images/france.jpeg'
import us from '../images/us.jpeg'
import uk from '../images/uk.jpeg'
import aus from '../images/australia.jpeg'

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

// import required modules
import { EffectCards } from "swiper";


function Popular() {

  return (
        <>
         <div className='places'>
                <Swiper
                    effect={"cards"}
                    grabCursor={true}
                    modules={[EffectCards]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <img className='egyptImg' src={egypt} alt='' />
                        <h5 className='sub1Heading'>Egypt</h5>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className='portugalImg' src={portugal} alt='' /> 
                        <h5 className='sub2Heading'>Portugal</h5>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className='tajmahalImg' src={tajmahal} alt='' /> 
                        <h5 className='sub3Heading'>TajMahal</h5>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className='turkeyImg' src={turkey} alt='' />
                        <h5 className='sub4Heading'>Turkey</h5>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className='greeceImg' src={greece} alt='' />
                        <h5 className='sub5Heading'>Greece</h5> 
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className='franceImg' src={france} alt='' />
                        <h5 className='sub6Heading'>France</h5> 
                    </SwiperSlide>
                    <SwiperSlide>
                    <img className='usImg' src={us} alt='' />
                        <h5 className='sub7Heading'>USA</h5>
                    </SwiperSlide>
                    <SwiperSlide>
                    <img className='ukImg' src={uk} alt='' />
                        <h5 className='sub8Heading'>UK</h5>
                    </SwiperSlide>
                    <SwiperSlide>
                    <img className='ausImg' src={aus} alt='' />
                        <h5 className='sub9Heading'>Australia</h5>
                    </SwiperSlide>
                </Swiper>

                <div className='slidebar-detail'>
                    <div className="slide-text">
                        <h2 className='slide-texth2'>
                            TREAT YOURSELF IN 2023-2024 
                        </h2> 
                        <p className='slide-textp'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat.</p>
                        <Link className='explorebtn' to="/popolarplaces">Explore</Link>
                    </div>
                </div>
            </div>
        </>
  )
}

export default Popular
