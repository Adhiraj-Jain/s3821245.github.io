import React, { useState } from 'react';
import './App.css';
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

function App() {
  const [showModal, setShowModal] = useState(false);
  const [projectDetails, setProjectDetails] = useState(null);

  const openModal = (project) => {
    console.log(project.value);
    setProjectDetails(project)
    setShowModal(prev => !prev);
  };
  return (
    <div className="App">
      <Popup className="modal" trigger={showModal} setShowModal={setShowModal} projectDetails={projectDetails} />
      <NavBar />
      <Header />
      <About />
      <Skills />
      <Experience />
      <Projects openModal={openModal} />
      <Quote />
      <ContactMe />
      <Footer />
    </div>
  );
}

export default App;
