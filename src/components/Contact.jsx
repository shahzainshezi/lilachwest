import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [status, setStatus] = useState('idle');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');
    
    const form = e.target;
    const data = new FormData(form);

    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: data,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch (e) {
      console.error('Submission error:', e);
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="contact-v2">
      <div className="container contact-editorial-grid">
        
        <div className="contact-text-area">
          <h2 className="editorial-title">
            Let's Build Your<br/>
            <span className="italic-text accent-text">Financial Future</span><br/>
            Together.
          </h2>
          <p className="contact-subtitle">
            Schedule your consultation today. Take the first step toward lasting security and legacy preservation.
          </p>
        </div>

        <div className="contact-form-area">
          {status === 'success' ? (
            <div className="form-success-state">
              <h3 className="accent-text">Message Sent!</h3>
              <p>Thank you for reaching out. A dedicated advisor will connect with you within 24 hours.</p>
              <button 
                onClick={() => setStatus('idle')} 
                className="link-elegant"
                style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#D9BB70', marginTop: '1rem' }}
              >
                Send another message
              </button>
            </div>
          ) : (
            <form 
              className="minimal-form" 
              action="https://formspree.io/f/mojpkkaz" 
              method="POST"
              onSubmit={handleSubmit}
            >
              <div className="form-row">
                <input type="text" name="full_name" placeholder="Full Name" required />
              </div>
              <div className="form-row">
                <input type="email" name="email" placeholder="Email Address" required />
              </div>
              <div className="form-row">
                <input type="tel" name="phone" placeholder="Phone Number" />
              </div>
              <button 
                type="submit" 
                className="btn btn-primary submit-btn-v2"
                disabled={status === 'submitting'}
              >
                {status === 'submitting' ? 'Sending...' : 'Request Consultation'}
              </button>
              {status === 'error' && (
                <p style={{ color: '#ff6b6b', marginTop: '1rem', fontSize: '0.9rem' }}>
                  Oops! Something went wrong. Please try again.
                </p>
              )}
            </form>
          )}
        </div>

      </div>
    </section>
  );
};

export default Contact;
