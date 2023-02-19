import React from 'react';
import './App.css';
import Navbar from './components/NavB.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/home.js';
import About from './components/about.js';
import Founders from './components/founders.js';
import Footer from './components/footer.js';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/About" element={<About/>}></Route>
        <Route path='/Founders' element={<Founders/>}></Route>
        <Route path='/Footer' element={<Footer/>}></Route>
      </Routes>
    </Router>
  );
}

  
export default App;


