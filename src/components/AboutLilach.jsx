import React from 'react';
import './AboutLilach.css';

const AboutLilach = () => {
  return (
    <section id="lilach" className="lilach-v2">
      <div className="container">
        
        <div className="lilach-editorial-wrapper">
          <div className="lilach-text-column">
            <span className="editorial-eyebrow">The Founder</span>
            <h2 className="editorial-title">Dedicated to Your<br/><span className="italic-text">Financial Security</span></h2>
            
            <div className="lilach-bio-text">
              <p>
                Lilach West is a dedicated financial professional and the founder of Spring Financial Group. Her expertise stems from a profound understanding of modern wealth architecture and an unwavering commitment to client success.
              </p>
              <div className="elegant-quote">
                "She is passionate about helping individuals and families create secure, sustainable retirement strategies."
              </div>
            </div>
          </div>

          <div className="lilach-image-column">
             <div className="image-frame">
               <img src="./images/670e9de3-60d7-483c-a9c6-420149e7aec7.jfif" alt="Lilach West - Financial Professional" loading="lazy" decoding="async" />
             </div>
             <div className="image-caption">Lilach West — Founder</div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutLilach;
