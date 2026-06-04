import React from 'react';
import { Check } from 'lucide-react';
import './ThankYou.css';

const ThankYou = () => {
  return (
    <div className="thank-you-page">
      <div className="bg-decorations">
        <div className="bg-blob blob-green-1"></div>
        <div className="bg-blob blob-green-2"></div>
      </div>

      <div className="thank-you-container container">
        {/* LEFT COLUMN: Main message */}
        <div className="thank-you-content">
          <div className="status-badge">
            <span className="badge-icon-box">
              <Check size={12} strokeWidth={3} />
            </span>
            Request Received
          </div>

          <h1 className="editorial-title">
            Thank You for <br />
            <span className="italic-text">Reaching Out</span>
          </h1>
          <p className="subtext">
            We appreciate you taking the time to submit your information. Your request has been received and a member of our team will be in touch soon.
          </p>

          <div className="next-steps-section">
            <h3>What Happens Next</h3>
            <p className="body-text">
              An agent will contact you to discuss next steps and gather any additional information needed to better understand your situation and assist you further.
            </p>
            <p className="body-text secondary-text">
              This process is intended to be informative, helpful, and tailored to your needs. Our goal is to provide clarity around your questions and help you determine the best path forward based on your goals and circumstances.
            </p>
          </div>

          <div className="action-buttons">
            <a href="#" className="btn btn-primary btn-back">Return to Main Page</a>
            <p className="notice-text">
              Please allow a reasonable amount of time for follow-up. If additional information is needed, our team will guide you through the next steps.
            </p>
          </div>
        </div>

        {/* RIGHT COLUMN: Step progression overview */}
        <div className="next-steps-overview">
          <div className="overview-header">Next Step Overview</div>

          <div className="steps-list">
            <div className="step-card">
              <div className="step-number">01</div>
              <div className="step-info">
                <h4>Review</h4>
                <p>Your submitted details will be reviewed by our team so we can prepare for a more meaningful conversation.</p>
              </div>
            </div>

            <div className="step-card">
              <div className="step-number">02</div>
              <div className="step-info">
                <h4>Contact</h4>
                <p>An agent will reach out to connect with you, discuss next steps, and gather any further information that may be helpful.</p>
              </div>
            </div>

            <div className="step-card">
              <div className="step-number">03</div>
              <div className="step-info">
                <h4>Guidance</h4>
                <p>From there, we will provide direction based on your goals, with a focus on education, clarity, and a strong client experience.</p>
              </div>
            </div>
          </div>

          <div className="overview-footer">
            <a href="#" className="btn btn-secondary btn-white">Back to Website</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;
