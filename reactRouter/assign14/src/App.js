import React from "react";
import "./App.css";
import Navbar from "./Navbar";
import {Routes, Route} from "react-router-dom";
import About from './components/About';
import Support from './components/Support';
import Home from './components/Home';
import Signup from './components/Signup';
import Products from './components/Products';
import Pricing from './components/Pricing';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/support" element={<Support />} />
        
        
      </Routes>
    </div>
  );
}

export default App;

