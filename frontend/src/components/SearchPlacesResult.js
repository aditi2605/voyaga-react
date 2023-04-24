import React from 'react'
const axios = require('axios');
// import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';


function SearchPlacesResult() {

    // const navigate = useNavigate();

    // redirect to addrecipe page
//   const handleInput = () => {
//     let path = '/createrecipe '; 
//     navigate(path);

      // search recipes
  
  const API_KEY = "aaa7fc4fcffe44638d5bded15a9198c2";

  const [attraction, setAttraction] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('');

  useEffect( () => {
    const getRecipes = async () => {
        const config = {
          method: 'get',
          url: `https://api.geoapify.com/v2/places?categories=commercial.supermarket&filter=rect%3A10.716463143326969%2C48.755151258420966%2C10.835314015356737%2C48.680903341613316&limit=20&apiKey=${API_KEY}`,
          headers: { }
        };

        const response = await axios.get(`https://api.geoapify.com/v2/places?categories=commercial.supermarket&filter=rect%3A10.716463143326969%2C48.755151258420966%2C10.835314015356737%2C48.680903341613316&limit=20&apiKey=${API_KEY}`);

        console.log(response.features);
        
        // axios(config)
        // .then(function (response) {
        //   console.log("pre boom!")
        //     setAttraction(response.data);
        //     console.log("boom!")
        //     console.log(response);
        // })
        // .catch(function (error) {
        //   console.log("boom! error");
        //   console.log(error);
        // });
        
    };
    getRecipes();
  }, [query]);

 
  const updateSearch = (e) => {
      setSearch(e.target.value);
  };

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setAttraction('');
  };
} 
  return (

        <>
              { 
                attraction && attraction?.map && attraction?.map((attraction, i)  => {
                        return (
                          <div className="displayRecipe" key={i}>
                            <h5 className='displayRecipetitle'>{attraction.type.features.properties.name}</h5>
                            <h3 className='displayRecipetitle'>{attraction.type.features.properties.country}</h3> 
                            
                            <ul className='displayRecipeingredients'>
                              <li><b>Recipe Ingredients</b></li>
                              <li>{attraction.type.features.properties.name}</li> 
                              <li>{attraction.type.features.properties.address_line1}</li> 
                              <li>{attraction.type.features.properties.address_line2}</li> 
                              <li>{attraction.type.features.raw.amenity}</li> 
                            </ul>
                            <NavLink to={`/updaterecipe/${recipes._id}`}><button className='editbtn'>Edit</button></NavLink>
                            <button className='dltbtn' onClick={() => deleteRecipe(recipes._id)}>Delete</button> 
                          </div>
                            
                      )
                    })
      }

        </>

  )
}

export default SearchPlacesResult
