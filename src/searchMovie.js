import React from 'react';

export default function SearchMovie() {
  return(
    <form className='form'>
      <input className='input' type='text' name='query' placeholder='Search for a movie, tv show, person...'/>
      <button className='button' type='submit'>Search</button>
    </form>
  );
}
