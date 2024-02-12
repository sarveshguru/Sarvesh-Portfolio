import './App.css';
// import React, { useEffect, useState } from 'react';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/home/Home';
import About from './components/about/About';
import Projects from './components/projects/Projects';
// import Preloading from './components/preloading/Preloading';
import Contact from './components/contact/Contact';
import Resume from './components/resume/Resume';


function App() {

  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     // console.log(loading);
  //     await new Promise(resolve => setTimeout(resolve, 600000));
      
  //     setLoading(false);
  //     // console.log(loading);
  //   };
  //   fetchData();
  // }, []);

  return (
    <Router>
      {/* <Preloading loading={loading} />  */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="About" element={<About />} />
        <Route path="Projects" element={<Projects />} />
        <Route path="Contact" element={<Contact />} />
        <Route path="Resume" element={<Resume />} />
      </Routes>
    </Router>
  );
}

export default App;
