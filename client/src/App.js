import React from 'react';
import Players from './Players';
import Header from './Header';
import './App.css';

function App() {
  return (
    <div className="App">
      <div>
      <Header />
        <Players/>
      </div>
    </div>
  );
}

export default App;