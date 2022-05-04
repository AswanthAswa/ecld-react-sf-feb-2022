import React from 'react';
import { Routes, Route } from "react-router-dom";
import { TopNavbar } from "./TopNavbar";
import { Home } from "./components/Home";
import { Contact } from "./components/Contact";
import { About } from "./components/About";
import { MoreDetails } from "./components/MoreDetails"
import { Students } from "./components/Students";
import { Login } from "./components/Login";
import { Footer } from "./Footer";
import { AuthProvider } from "./components/Auth";
import { Requireauth } from "./components/Requireauth";

function App() {
  return (
    <div>
    < AuthProvider>
      <TopNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/students" element={<Requireauth> <Students /> </Requireauth>} />
        <Route path="/students/:studId" element={<MoreDetails />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
      <Footer />
      </AuthProvider>
    </div>
  );
}

export default App;

