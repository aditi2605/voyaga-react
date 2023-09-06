import React from 'react'
import greece from '../images/greece.jpeg'
import towerBridge from '../images/tower_bridge.jpeg'
import statueofLiberty from '../images/New York City Statue of Liberty.jpeg'
import paris from '../images/paris.jpeg'


function ShowAllPlaces() {
  return (
        <>
            <h2 className='middle-container-title'>Find Your Next Holiday Destination</h2>
           
            <div className='flex-container'>
                <div className='sub-container-box-img'>
                    <img className='flex-image-1' src={statueofLiberty} alt='united-kindom' />
                </div>
                <div className='sub-container-box-description'>
                    <h3>Things to Do in New York City</h3>
                    <hr />
                    <p>New York City comprises 5 boroughs sitting where the Hudson River meets the Atlantic Ocean. At its core is Manhattan, a densely populated borough that’s among the world’s major commercial, financial and cultural centers. Its iconic sites include skyscrapers such as the Empire State Building and sprawling Central Park. Broadway theater is staged in neon-lit Times Square.</p>
                    <button className='readMoreBtn'>Read More...</button>
                </div>
            </div> 
            <div className='flex-container'>
                <div className='sub-container-box-description'>
                    <h3>Things to Do in Paris</h3>
                    <hr />
                    <p>New York City comprises 5 boroughs sitting where the Hudson River meets the Atlantic Ocean. At its core is Manhattan, a densely populated borough that’s among the world’s major commercial, financial and cultural centers. Its iconic sites include skyscrapers such as the Empire State Building and sprawling Central Park. Broadway theater is staged in neon-lit Times Square.</p>
                    <button className='readMoreBtn'>Read More...</button>
                </div>
                <div className='sub-container-box-img'>
                    <img className='flex-image-2' src={paris} alt='united-kindom' />
                </div>  
            </div> 
            <div className='flex-container'>
                <div className='sub-container-box-img'>
                    <img className='flex-image-1' src={towerBridge} alt='united-kindom' />
                </div>
                <div className='sub-container-box-description'>
                    <h3>Things to Do in London</h3>
                    <hr />
                    <p>London is layered with history, where medieval and Victorian complement a rich and vibrant modern world. The Tower of London and Westminster neighbour local pubs and markets, and time-worn rituals like the changing of the guards take place as commuters rush to catch the Tube. It’s a place where travellers can time-hop through the city, and when they’re weary, do as Londoners do and grab a “cuppa” tea.</p>
                    <button className='readMoreBtn'>Read More...</button>
                </div>
            </div> 
            <div className='flex-container'>
                <div className='sub-container-box-description'>
                    <h3>Things to Do in Greece</h3>
                    <hr />
                    <p>Greece is a fascinating country with a rich culture and history that spans thousands of years. This Mediterranean country is known for its stunning landscapes, delicious food, and historic sites..</p>
                    <button className='readMoreBtn'>Read More...</button>
                </div>
                <div className='sub-container-box-img'>
                    <img className='flex-image-2' src={greece} alt='united-kindom' />
                </div>  
            </div>
        </>
  )
}

export default ShowAllPlaces
