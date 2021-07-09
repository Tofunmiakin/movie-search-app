import React from 'react';
import './App.css';
import SearchMovie from './searchMovie';
import Navigation from '../Components/Navigation';

const App = () => {
  return (
    <div className="App">
      <Navigation/>
      <SearchMovie />
    </div>
  );
}

export default App;
