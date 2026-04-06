import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-v2">
      <div className="container">
        <div className="footer-editorial-grid">
          
          <div className="footer-brand-col">
            <h3 className="footer-logo">Lilach <span className="italic-text">West</span></h3>
            <p className="footer-logo-subline">Founder of Spring Financial Group</p>
            <p className="footer-abstract">Securing freedom for generations through meticulous wealth architecture.</p>
          </div>

          <div className="footer-links-col">
            <h4 className="footer-col-title">Navigation</h4>
            <nav className="footer-nav-v2">
              <a href="#about" className="link-elegant">The Firm</a>
              <a href="#services" className="link-elegant">Expertise</a>
              <a href="#process" className="link-elegant">Philosophy</a>
              <a href="#contact" className="link-elegant">Contact</a>
            </nav>
          </div>

          <div className="footer-contact-col">
            <h4 className="footer-col-title">Inquiries</h4>
            <p className="contact-detail">letstalk@springfinancial.group</p>
            <p className="contact-detail">+1 (800) 555-0199</p>
          </div>

        </div>

        <div className="footer-legal">
          <p className="disclaimer-v2">
            Spring Financial Group is an independent financial services firm. Guarantees are backed by the issuing insurance company.
          </p>
          <p className="copyright-v2">
            &copy; {new Date().getFullYear()} Spring Financial Group. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
