import React from 'react';
import NavBar from './components/NavBar.js';
import Banner from './components/Banner.js';
import About from './components/About.js';
import { Container } from 'react-bootstrap';
import './assets/css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Skills from './components/Skills.js';
import Experience from './components/Experience.js';
import Projects from './components/Projects.js';
import Contact from './components/Contact.js';
import Footer from './components/Footer.js';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <section className="body">
        <Container className="box">
          <About />
          <Skills />
          <Experience />
          <Projects />
        </Container>
      </section>
      <Contact />
      <Footer />
    </div>
  );
}

export default App;