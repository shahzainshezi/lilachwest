import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import AboutLilach from './components/AboutLilach';
import PersonalBio from './components/PersonalBio';
import ClientProcess from './components/ClientProcess';
import Values from './components/Values';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  
  // Smooth scroll for anchor links
  useEffect(() => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth'
          });
        }
      });
    });
  }, []);

  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <AboutLilach />
        <PersonalBio />
        <ClientProcess />
        <Values />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
