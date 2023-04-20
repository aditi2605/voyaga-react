import React from 'react'
import globe from '../video/globe.mp4'
import { useEffect, useState } from 'react';



function SearchPlace() {

  const API_KEY = "aaa7fc4fcffe44638d5bded15a9198c2";

  const [attraction, setAttraction] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('');

  useEffect( () => {
    const getRecipes = async () => {
      const response = await fetch(`https://api.geoapify.com/v2/places?categories=tourism.attraction,tourism.sights,tourism&filter=place:5148c252a6a502bcbf594b1dd54310c04940f00101f90146000100000000009203064c6f6e646f6e&name=${query}&limit=20&apiKey=${API_KEY}`)
      const data =  await response.json('');
      console.log(data)
      setAttraction(data);
    };
    getRecipes();
  }, [query]);

 
  const updateSearch = (e) => {
      setSearch(e.target.value);
  };

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  };

  return (
        <>|
         <section className="mainContainer">
                <video src={globe} loop autoPlay={true} muted></video>
                <div className="overlay"></div>
                <div className="text">
                    <h2>Everything You Need  </h2> 
                    <h3>To Know About Exploring The City</h3>
                    <form onSubmit={getSearch} className='searchForm'>
                        <input className='search-bar' type='text' value={search} onChange={updateSearch}  />
                        <button className='search-button' type='submit' onClick={getSearch}>Search</button>
                    </form>
                    
                </div>
                { attraction?.map && attraction?.map((attraction, i)  => {
                        return (
                          <div className="displayRecipe" key={i}>
                            <h5 className='displayRecipetitle'>Hello{attraction.features.properties.name}</h5>
                            <h3 className='displayRecipetitle'>{attraction.type.features.properties.country}</h3> 
                            
                            <ul className='displayRecipeingredients'>
                              <li><b>Recipe Ingredients</b></li>
                              <li>{attraction.type.features.properties.name}</li> 
                              <li>{attraction.type.features.properties.address_line1}</li> 
                              <li>{attraction.type.features.properties.address_line2}</li> 
                              <li>{attraction.type.features.raw.amenity}</li> 
                            </ul>
                          
                          </div>
                            
                      )
                    })
      }
              
            </section> 
        </>
  )
}

export default SearchPlace