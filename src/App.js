import React from 'react';
import Home from './Home';
import Navbar from './Navbar';

function App(props) {

  console.log();
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Home />
      </div>
    </div>
  );
}

export default App;
