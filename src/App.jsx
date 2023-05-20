import React, { useState, useEffect, Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Technologies from './components/Technologies/Technologies';
import Poster from './components/Poster';
import Testimonials from './components/Testimonials/Testimonials';
import Contact from './components/Contact/Contact';
import ProjectMobile from './components/Projects/ProjectMobile';
import { Loader } from '@react-three/drei';

function App() {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 768);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 768);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <BrowserRouter>
      <Navbar />
      <Suspense fallback={null}>
        <Hero />
      </Suspense>
      <Loader/>
      <About />
      {isDesktop ? (
        <Suspense fallback={null}>
          <Projects />
        </Suspense>
      ):(
          <ProjectMobile/>
      )}
      <Technologies />
      <Poster />
      <Testimonials />
      <Contact />
    </BrowserRouter>
  );
}

export default App;
