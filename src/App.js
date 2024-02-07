import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/home/Home';
import About from './components/about/About';
import Projects from './components/projects/Projects';
import ModalCard from './components/projects/ModalCard';
import Contact from './components/contact/Contact';
import Resume from './components/resume/Resume';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="About" element={<About />} />
        <Route path="Projects" element={<Projects />} />
        <Route path="Contact" element={<Contact />} />
        <Route path="Resume" element={<Resume />} />
        <Route path="ModalCard" element={<ModalCard />} />
      </Routes>
    </Router>
  );
}

export default App;
