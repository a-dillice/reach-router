import React, { useEffect } from 'react';
import {Router, navigate} from '@reach/router';
import Home from './components/Home';

function App() {

  // go to homepage first
  useEffect(() => {
    navigate("/home");
  },[]); 

  // return
  return (
    <div className="App">
      
      <Router>
          <Home path="/:seg" />
          <Home path="/:seg/:color1/:color2" />
      </Router>


    </div>
  );
}

export default App;
