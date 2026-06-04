import React, { useState, useEffect } from 'react';
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
import Book from './components/Book';
import ThankYou from './components/ThankYou';

function App() {
  const getRoute = () => {
    const path = window.location.pathname;
    const hash = window.location.hash;
    
    if (hash === '#thank-you' || path.endsWith('/thank-you') || path.endsWith('/thank-you.html')) {
      return 'thank-you';
    }
    if (
      hash === '#book' || 
      hash === '#booking' || 
      path.endsWith('/book') || 
      path.endsWith('/book.html') ||
      path.endsWith('/booking') || 
      path.endsWith('/booking.html')
    ) {
      return 'book';
    }
    return 'home';
  };

  const [currentRoute, setCurrentRoute] = useState(getRoute());

  useEffect(() => {
    const handleLocationChange = () => {
      setCurrentRoute(getRoute());
      window.scrollTo(0, 0); // Scroll to top on route change
    };

    window.addEventListener('hashchange', handleLocationChange);
    window.addEventListener('popstate', handleLocationChange);
    
    return () => {
      window.removeEventListener('hashchange', handleLocationChange);
      window.removeEventListener('popstate', handleLocationChange);
    };
  }, []);
  
  // Smooth scroll for anchor links (only on homepage)
  useEffect(() => {
    if (currentRoute !== 'home') return;

    const handleAnchorClick = function (e) {
      const href = this.getAttribute('href');
      if (href.startsWith('#') && href !== '#') {
        e.preventDefault();
        const targetElement = document.querySelector(href);
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth'
          });
        }
      }
    };

    const anchors = document.querySelectorAll('a[href^="#"]');
    anchors.forEach(anchor => {
      anchor.addEventListener('click', handleAnchorClick);
    });

    return () => {
      anchors.forEach(anchor => {
        anchor.removeEventListener('click', handleAnchorClick);
      });
    };
  }, [currentRoute]);

  if (currentRoute === 'book') {
    return <Book />;
  }

  if (currentRoute === 'thank-you') {
    return <ThankYou />;
  }

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
