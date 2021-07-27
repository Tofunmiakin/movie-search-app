import React from 'react';
import SearchMovie from './searchMovie';
import Navigation from '../Components/Navigation';
import FeaturedMovies from '../Components/FeaturedMovies';

const App = () => {
  return (
    <div className="App">
      <Navigation />
      <div className='flex'>
        <SearchMovie />
        <FeaturedMovies />
      </div>
    </div>
  );
}

export default App;
