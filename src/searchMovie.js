import React, {useState} from 'react';
import MovieCard from './movieCard';
import './searchMovie.css'

export default function SearchMovie(props) {

  const [query, setQuery] = useState('');

  const [movies, setMovies] = useState([]);

  const searchMovie = async (e) => {
    e.preventDefault();


    const url = `https://api.themoviedb.org/3/search/movie?api_key=dff4a91d49ad334e41a5e1c2973fa9d8&
    language=en-US&query=${query}&include_adult=false`;

    try {
      const res = await fetch(url);
      const data = await res.json();
      setMovies(data.results)
    }catch(err){
      console.log(err);
    }
  }
  
  return(
    <> 
      <form className='form' onSubmit={searchMovie}>
        <input className='input' type='text' name='query'
          placeholder='Search for a movie, tv show, person...'
          value = {query} onChange = {(e) => setQuery(e.target.value)}
          />
        <button className='button' type='submit'>Search</button>
      </form>
      <div className="card-list">
        {movies.filter(movie => movie.poster_path).map(movie => (
         <MovieCard movie={movie} key={movie.id}/>
        ))}
      </div>
    </>
  );
}