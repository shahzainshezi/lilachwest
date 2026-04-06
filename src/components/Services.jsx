import React from 'react';
import './Services.css';

const servicesData = [
  {
    num: '01',
    title: 'Retirement Income Planning',
    description: 'Create a reliable, tax-efficient income stream to enjoy your retirement years without financial worry.',
  },
  {
    num: '02',
    title: 'Fixed Index Annuities',
    description: 'Protect your principal while participating in market growth potential, securing your long-term stability.',
  },
  {
    num: '03',
    title: 'Wealth Preservation',
    description: 'Implement strategies to safeguard your assets from market volatility and economic uncertainties.',
  },
  {
    num: '04',
    title: 'Risk Management',
    description: 'Identify and mitigate potential risks to your financial well-being with comprehensive protection planning.',
  },
  {
    num: '05',
    title: 'Legacy & Estate Planning',
    description: 'Ensure your wealth is transferred to your loved ones efficiently and according to your wishes.',
  },
  {
    num: '06',
    title: 'Tax-Efficient Strategies',
    description: 'Minimize your tax burden during retirement to maximize the money you keep and pass on.',
  }
];

const Services = () => {
  return (
    <section id="services" className="services-v2">
      <div className="container">
        
        <div className="services-header">
          <span className="editorial-eyebrow">Our Expertise</span>
          <h2 className="editorial-title">What We <span className="italic-text">Navigate</span></h2>
        </div>

        <div className="services-list">
          {servicesData.map((service, index) => (
            <div className="service-row" key={index}>
              <div className="service-num">{service.num}</div>
              <div className="service-content">
                <h3 className="service-title">{service.title}</h3>
                <p className="service-desc">{service.description}</p>
              </div>
              <div className="service-action">
                <span className="plus-icon">+</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;
