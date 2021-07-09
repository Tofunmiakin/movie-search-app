import React from 'react';
// import './movieCard.css'

const MovieCard =({movie}) =>{
  return(
    <div className="" >
    <img className=""
      src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}
      alt={movie.title + ' poster'}/>
      <div className="">
        <h3 className="">{movie.title}</h3>
        <p><small>RELEASE DATE: {movie.release_date}</small></p>
        <p><small>RATING: {movie.vote_average}</small></p>
        <p className="">{movie.overview}</p>
      </div>
  </div>
  )
}

export default MovieCard;