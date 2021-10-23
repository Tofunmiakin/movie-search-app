import {React, useEffect, useState} from 'react';
import SearchMovie from './searchMovie';
import Navigation from '../Components/Navigation';
import FeaturedMovies from '../Components/FeaturedMovies';
import Trending from '../Components/Trending';
import  FetchTrending  from '../Helpers/Helpers';

const App = () => {
  const [trendingMovies, setTrendingMovies]= useState([]);

  useEffect(()=>{
    const fetchAPI = async ()=>{
      setTrendingMovies(await FetchTrending());
    };

    fetchAPI();
  }, []);
  
  return (
    <div className="App">
      <Navigation />
      <div className='flex'>
        <div className= 'flex flex-1 flex-col'>
        <SearchMovie />
        <Trending trendingMovies={trendingMovies}/>
        </div>
        <FeaturedMovies />
      </div>
    </div>
  );
}

export default App;