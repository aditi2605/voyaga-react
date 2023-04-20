import React from 'react'
import Home from '../components/Home';
import Popular from '../components/PopularPlaces';
import SearchPlace from '../components/SearchPlace';

function HomePage() {
  return (
        <>
            <Home />
            <Popular />
            <SearchPlace />
        </>
  )
}

export default HomePage
