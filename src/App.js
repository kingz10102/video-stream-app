import React from 'react';
import Heading from './components/Heading';
import NavBar from './components/NavBar';
import Results from './components/Results';
import './App.css';
function App() {
  return (
    <div className="app">
     {/* Heading */}
     <Heading/>
     {/* Navbar */}
     <NavBar/>
     {/* Results */}
     <Results/>
    </div>
  );
}

export default App;
