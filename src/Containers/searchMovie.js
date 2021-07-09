import React, { useState } from 'react';
import MovieCard from '../Components/movieCard';

const SearchMovie = () => {

  const [query, setQuery] = useState('');

  const [movies, setMovies] = useState([]);

  const searchMovie = async (e) => {
    e.preventDefault();

    const url = `https://api.themoviedb.org/3/search/movie?api_key=dff4a91d49ad334e41a5e1c2973fa9d8&
    language=en-US&query=${query}&include_adult=true`;

    try {
      const res = await fetch(url);
      const data = await res.json();
      setMovies(data.results)
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className='text-center'>
      <form className='my-20 flex flex-row justify-center' onSubmit={searchMovie}>
        <input
          className='border-transparent border-2 rounded-2xl p-6 w-2/5 border-r-none md:text-xl focus:ring-2 focus:outline-none focus:ring-indigo-500 shadow-lg'
          type='text'
          name='query'
          placeholder='Search for a movie'
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button className='-ml-20 p-6'
          type='submit'
        >
          <svg xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
      </form>
      <div className="">
        {movies.filter(movie => movie.poster_path).map(movie => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
      </div>
    </div>
  );
}

export default SearchMovie;