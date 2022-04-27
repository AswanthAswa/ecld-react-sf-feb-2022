import React from 'react';
import { Routes, Route } from "react-router-dom";
import { Navbar } from "./Navbar";
import { Home } from "./components/Home";
import { Contact } from "./components/Contact";
import { About } from "./components/About";
import { MoreDetails } from "./components/MoreDetails"
import { Students } from "./components/Students";
import { Footer } from "./Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/about" element={<About />} />
        
        <Route path="/students" element={<Students />} />
        <Route path="/students/:studId" element={<MoreDetails />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
