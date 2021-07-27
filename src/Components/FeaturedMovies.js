import React, { useState, useEffect } from 'react';
import FeaturedCard from './FeaturedCard';
import TopMovie from './TopMovie';

const FeaturedMovies = () => {
  const [featuredList, setFeaturedList] = useState([]);

  useEffect(() => {
    const url = " https://api.themoviedb.org/3/discover/movie?api_key=dff4a91d49ad334e41a5e1c2973fa9d8&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate";

    const fetchData = async () => {
      try {
        const res = await fetch(url);
        const data = await res.json();
        setFeaturedList(data.results);
        console.log(data.results);
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className='flex-shrink hidden h-full rounded-3xl lg:block p-5 my-10 -ml-80 mr-10 bg-indigo-700 text-white'>

      {featuredList.slice(0, 1).map(topMovie => (
        <TopMovie topMovie={topMovie} key={topMovie.id} />
      ))}

      {featuredList.slice(1).map(featuredMovie => (
        <FeaturedCard featuredMovie={featuredMovie} key={featuredMovie.id} />
      ))}
    </div>
  );
}

export default FeaturedMovies;