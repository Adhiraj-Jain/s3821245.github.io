import React, { useState, useEffect, useRef } from 'react';
import './Stylesheets/App.css';
import Header from './components/Layout/Header';
import About from "./components/About/About";
import Skills from './components/Skills/Skills';
import Experience from './components/Experience/Experience';
import Projects from './components/Projects/Projects';
import Quote from './components/Quote/Quote';
import ContactMe from './components/ContactMe/ContactMe';
import Footer from './components/Layout/Footer';
import NavBar from './components/Layout/NavBar';
import Popup from './components/Projects/Popup';
import ResumeBar from './components/ResumeBar/ResumeBar';
import Gallery from './components/Gallery/index.tsx';

const App = () => {
  const [showModal, setShowModal] = useState(false);
  const [projectDetails, setProjectDetails] = useState(null);
  const [pageHeight, setPageHeight] = useState(0);
  const [pageWidth, setPageWidth] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current !== null) {
      setPageHeight(ref.current.clientHeight);
    }
  }, []);
  useEffect(() => {
    if (ref.current !== null) {
      setPageWidth(window.innerWidth);
    }
  }, []);
  const openModal = (project) => {
    setProjectDetails(project)
    setShowModal(prev => !prev);
  };
  return (
    <div className="App" >
      <Popup className="modal" trigger={showModal} setShowModal={setShowModal} projectDetails={projectDetails} />
      <div ref={ref}>
        <ResumeBar pageHeight={pageHeight} />
        <NavBar pageHeight={pageHeight} />
        <Header pageWidth={pageWidth} pageHeight={pageHeight} />
        <About />
        <Skills />
        <Experience />
        <Projects openModal={openModal} />
        {/* <Gallery /> */}
        <Quote />
        <ContactMe />
        <Footer />
      </div>
    </div>
  );
}

export default App;
