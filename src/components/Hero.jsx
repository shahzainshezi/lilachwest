import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero-v2">
      <div className="hero-grid container">

        <div className="hero-content">
          <h1 className="hero-title">
            Helping You Retire<br />
            <span className="italic-text">with Confidence,<br />Clarity & Peace</span>
          </h1>
          <p className="hero-subtitle">
            Personalized financial strategies designed to protect your future, grow your wealth, and create lasting security for you and your family.
          </p>
          <div className="hero-actions">
            <a href="#contact" className="btn btn-primary">Schedule Consultation</a>
            <a href="#about" className="link-elegant">Explore Firm Insights</a>
          </div>
        </div>

        <div className="hero-media-wrapper">
          <div className="hero-media">
            <img
              src="./images/Promoting iHeartMED with a smile_cleanup-Picsart-AiImageEnhancer.png"
              alt="Lilach West - Personalized Financial Advisory"
              className="hero-img"
              fetchPriority="high"
            />
            <div className="hero-logo-mask"></div>
            <div className="media-overlay"></div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
