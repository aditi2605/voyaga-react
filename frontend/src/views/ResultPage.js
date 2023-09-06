import React from 'react'
import { useState, useEffect } from 'react';
import Result from '../components/Result'
import {BsSearch} from 'react-icons/bs'

function ResultPage() {

  // const navigate = useNavigate();

  // const title = document.getElementsByClassName('result-title');

  const [result, setResult] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('');
  const [displayStatus, setDisplayStatus] = useState('none');

  const handleShow = () => {
    setDisplayStatus(displayStatus === 'none' ? 'block' : 'none');
  }

  useEffect(() => {
    const getResult = async () => {
      try {
        const response = await fetch(`http://localhost:8080/check-input?input=${query}`);
        if (response.ok) {
          const data = await response.json();
          console.log(data.results);
          setResult(data.results); // Assuming the API response has a 'results' property
        }
      } catch (error) {
        console.error('Error fetching data:', error);
        setResult([]);
      }
    };
    getResult();
  }, [query]);

  const updateSearch = (e) => {
    setSearch(e.target.value);
  };

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
  };



  return (
    <>   
          <div className="form-Section">
            {/* result search section */}
            <form onSubmit={getSearch} className='searchForm'>
                <input className='search-bar' type='text' value={search} onChange={updateSearch} placeholder='Where to?'/>
                <button className='search-button' type='submit' onClick={handleShow} ><BsSearch /></button>
            </form>
          </div> 
          <div className='result-title'  style={{ display: displayStatus }}>
              <h2>Top 10 Things To Do In : {search}</h2> 
             </div>
            <div className='result-output-section'>
              {result && result.map((results, i) => (
                <Result
                  // key={result.id} // Don't forget to provide a unique key for each element in the list
                  key={i} 
                  title={results.Country}
                  subTitle={results.City}
                  place={results.NameofThePlace}
                  type={results.TypeofThePlace || 'Tourist Attraction'}
                  image={results.img || 'commingsoon.jpeg'}
                  durationtovisit={results.SuggestedDuration} 
                />
              ))}
    
              
            </div>
            
             
      
    </>
  )
}

export default ResultPage
