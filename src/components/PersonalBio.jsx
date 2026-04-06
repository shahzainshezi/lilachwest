import React from 'react';
import './PersonalBio.css';

const PersonalBio = () => {
  return (
    <section className="bio-v2">
      <div className="container container-narrow">
        <div className="massive-quote-wrapper">
          <div className="quote-mark">&ldquo;</div>
          <h2 className="massive-statement">
            Financial security creates <span className="italic-text accent-text">freedom for generations.</span>
          </h2>
          <div className="bio-supporting-text">
            <p>
              Lilach is a proud wife and mother, and her family plays a central role in everything she does. This deep personal anchor drives her commitment to safeguarding the futures of the families she serves.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PersonalBio;
