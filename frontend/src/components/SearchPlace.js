import React from 'react'
import globe from '../video/globe.mp4'
import { useNavigate } from 'react-router-dom';


function SearchPlace() {

  const navigate = useNavigate ();

  const handleClick = () => {
    let path = '/result'; 
        navigate(path);
  }

  return (
        <>|
         <section className="mainContainer">
                <video src={globe} loop autoPlay={true} muted></video>
                <div className="overlay"></div>
                <div className="text">
                    <h2>Everything You Need  </h2> 
                    <h3>To Know About Exploring The City</h3>
                    <button className='search-button' type='submit' onClick={handleClick}>Where Next</button>
                </div>  
          </section> 
        </>
  )
}

export default SearchPlace