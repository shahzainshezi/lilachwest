import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about-v3">
      <div className="container">

        <div className="about-overlap-grid">
          <div className="about-image-pillar">
            <img src="./images/ChatGPT Image Apr 4, 2026, 01_59_09 AM.png" alt="Office Professional Environment" loading="lazy" decoding="async" />
            <div className="pillar-accent"></div>
          </div>

          <div className="about-content-card">
            <span className="editorial-eyebrow">The Firm</span>
            <h2 className="editorial-title">Trust & <br /><span className="italic-text">Relationships</span></h2>

            <div className="card-divider"></div>

            <div className="about-text-content">
              <p className="lead-text">
                At Spring Financial Group, we believe financial planning is more than numbers &mdash; it's about people, families, and the life you want to live.
              </p>
              <p className="body-text">
                Led by Lilach West, our approach focuses on building long-term relationships rooted in absolute trust, comprehensive education, and personalized strategy tailored for every generation.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
