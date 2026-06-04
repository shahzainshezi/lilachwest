import React, { useState } from 'react';
import { Calendar, Users, FileText, CheckCircle, Shield, Award } from 'lucide-react';
import Header from './Header';
import './Book.css';

const Book = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    assets: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Mock form submission & redirect to thank you view
    setTimeout(() => {
      setIsSubmitting(false);
      window.location.hash = '#thank-you';
    }, 1200);
  };

  return (
    <div className="book-page">
      <div className="bg-decorations">
        <div className="bg-blob blob-green-1"></div>
        <div className="bg-blob blob-green-2"></div>
      </div>

      <Header />

      <main>
        {/* HERO / FORM SECTION */}
        <section className="book-hero container">
          <div className="hero-content">
            <h1 className="editorial-title">
              Let's Have a Conversation About <span className="italic-text">Your Financial Future</span>
            </h1>
            <p className="subtext">
              This first meeting is designed to be simple, educational, and pressure-free. We take time to learn about you, understand your goals, and share valuable information you can use whether or not you decide to move forward.
            </p>
          </div>

          <div className="hero-form-wrapper">
            <div className="form-card">
              <div className="form-header">
                <h3>Book Your Call</h3>
                <div className="editorial-divider"></div>
                <p className="form-subtitle">Complete the form below to request your introductory consultation.</p>
              </div>

              <form onSubmit={handleSubmit} className="booking-form">
                <div className="form-group">
                  <label htmlFor="name">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="(555) 000-0000"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="assets">Investable Assets</label>
                  <select
                    id="assets"
                    value={formData.assets}
                    onChange={handleChange}
                    required
                  >
                    <option value="" disabled>Select an amount</option>
                    <option value="under-100k">Under $100,000</option>
                    <option value="100k-250k">$100,000 - $249,999</option>
                    <option value="250k-500k">$250,000 - $499,999</option>
                    <option value="500k-1m">$500,000 - $999,999</option>
                    <option value="1m-2.5m">$1,000,000 - $2,499,999</option>
                    <option value="over-2.5m">$2,500,000+</option>
                  </select>
                </div>

                <button type="submit" className="btn btn-primary btn-submit" disabled={isSubmitting}>
                  {isSubmitting ? 'Processing...' : 'Request My Intro Call'}
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* FEATURE CARDS */}
        <section className="book-features container">
          <div className="features-grid">
            <div className="feature-card">
              <div className="card-icon-wrapper">
                <Calendar size={24} strokeWidth={1.5} />
              </div>
              <h3>Informational First Meeting</h3>
              <p>No sales pressure. Just a clear, helpful conversation designed to provide value first.</p>
            </div>

            <div className="feature-card">
              <div className="card-icon-wrapper">
                <Users size={24} strokeWidth={1.5} />
              </div>
              <h3>Personalized Discussion</h3>
              <p>We take the time to learn about your goals, priorities, and current financial picture.</p>
            </div>

            <div className="feature-card">
              <div className="card-icon-wrapper">
                <FileText size={24} strokeWidth={1.5} />
              </div>
              <h3>Valuable Takeaways</h3>
              <p>Leave with insights you can use immediately, with or without becoming a client.</p>
            </div>
          </div>
        </section>

        {/* WHAT TO EXPECT */}
        <section className="book-expectation container">
          <div className="expectation-grid">
            <div className="expectation-media">
              <div className="image-frame-decor"></div>
              <div className="image-wrapper">
                <img
                  src="./images/founder_image.png"
                  alt="Lilach West - Financial Advisory"
                  className="expectation-img"
                />
              </div>
            </div>

            <div className="expectation-content">
              <span className="editorial-eyebrow">Preparation for Success</span>
              <h2>What to Expect</h2>
              <div className="editorial-divider left-align"></div>
              <p className="lead-text">
                During this introductory meeting, we'll get to know you as a potential client and discuss the questions, concerns, and opportunities that matter most to you.
              </p>
              <p className="body-text">
                Our goal is to provide meaningful guidance and insight, not a high-pressure sales pitch. Whether we end up working together or not, you'll walk away with useful information that can help you make stronger financial decisions.
              </p>

              <div className="benefits-checklist">
                <div className="check-item">
                  <CheckCircle size={18} className="check-icon" />
                  <span>No sales pressure. Just absolute clarity.</span>
                </div>
                <div className="check-item">
                  <CheckCircle size={18} className="check-icon" />
                  <span>Personalized financial insights for your circumstances.</span>
                </div>
                <div className="check-item">
                  <CheckCircle size={18} className="check-icon" />
                  <span>Clear next steps for building and protecting wealth.</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* TRUST BANNER */}
        <section className="book-trust container">
          <div className="trust-grid">
            <div className="trust-item">
              <div className="trust-icon-box">
                <Shield size={20} />
              </div>
              <h4>Pressure-Free Experience</h4>
              <p>Your first call is focused on education, clarity, and getting to know your unique situation.</p>
            </div>

            <div className="trust-item">
              <div className="trust-icon-box">
                <Users size={20} />
              </div>
              <h4>Designed to Build Trust</h4>
              <p>Our approach is structured to make you feel comfortable before you ever step into an office.</p>
            </div>

            <div className="trust-item">
              <div className="trust-icon-box">
                <Award size={20} />
              </div>
              <h4>Fiduciary Standard</h4>
              <p>We align our recommendations entirely with your goals, upholding the highest standards of integrity.</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="book-footer">
        <div className="container">
          <p>&copy; 2026 Spring Financial Group &middot; Lilach West &middot; All rights reserved</p>
        </div>
      </footer>
    </div>
  );
};

export default Book;
