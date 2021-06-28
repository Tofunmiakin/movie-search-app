import React from 'react';
import './Navigation.css';

const Navigation = () => {
  return (
    <div className='top'>
      <h1>Movie Search App</h1>
      <div className='top-right'>
        <a href='#stuff'>stuff</a>
        <a href='#more stuff'>more stuff</a>
        <a href ="#login">login</a>
      </div>
    </div>
  );
}

export default Navigation;