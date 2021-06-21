import React from 'react';
import './App.css';
import SearchMovie from './SearchMovie/searchMovie';
import Navigation from '../Components/Navigation/Navigation';

const App = () => {
  return (
    <div className="App">
      <Navigation/>
      <SearchMovie />
    </div>
  );
}

export default App;
