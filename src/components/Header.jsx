import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import './Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header-v2 ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container header-container">
        
        <div className="brand-wrapper">
          <a href="#" className="brand-logo">
            Lilach <span className="brand-light">West</span>
          </a>
          <span className="brand-subline">Founder of Spring Financial Group</span>
        </div>

        <nav className={`nav-v2 ${isMobileMenuOpen ? 'nav-open' : ''}`}>
          <a href="#about" className="link-elegant">About Firm</a>
          <a href="#services" className="link-elegant">Expertise</a>
          <a href="#process" className="link-elegant">Philosophy</a>
          <a href="#contact" className="btn btn-primary btn-sm">Let's Talk</a>
        </nav>

        <button 
          className="mobile-btn"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} strokeWidth={1} /> : <Menu size={28} strokeWidth={1} />}
        </button>

      </div>
    </header>
  );
};

export default Header;
