import React from 'react';

const TopMovie = ({topMovie}) =>{
  return(
    <div className='bg-white text-black rounded-3xl w-96'>
        <img
          src={`https://image.tmdb.org/t/p/w1280/${topMovie.poster_path}`}
          alt='movie poster'
          className='rounded-3xl'
        />
        <div className='p-3 m-auto'>
          <p className='text-2xl my-3 font-bold'>{topMovie.title}</p>
          <p className='text-lg my-3'>{topMovie.release_date}</p>
          <p className='flex justify-end text-xl -mt-10'>{topMovie.vote_average}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="#bab52b" viewBox="0 0 24 24" stroke="#bab52b">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
            </svg>
          </p>
        </div>
      </div>
  )
}

export default TopMovie;