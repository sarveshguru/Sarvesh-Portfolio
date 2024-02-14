import './App.css';
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/home/Home';
import About from './components/about/About';
import Projects from './components/projects/Projects';
import Preloading from './components/preloading/Preloading';
import Contact from './components/contact/Contact';
import Resume from './components/resume/Resume';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCodeFork } from '@fortawesome/free-solid-svg-icons';


function App() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      await new Promise(resolve => setTimeout(resolve, 6000));

      setLoading(false);
    };
    fetchData();
  }, []);

  return (
    <Router>
      <Preloading loading={loading} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="About" element={<About />} />
        <Route path="Projects" element={<Projects />} />
        <Route path="Contact" element={<Contact />} />
        <Route path="Resume" element={<Resume />} />
      </Routes>
      <div className="fork-git">
        <a target="_blank" rel="noopener noreferrer" href="https://github.com/sarveshguru/Sarvesh-Portfolio">
          <FontAwesomeIcon icon={faCodeFork} />
        </a>
      </div>
    </Router>
  );
}

export default App;
