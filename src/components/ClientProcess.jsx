import React from 'react';
import { Compass, FileSearch, Map, Briefcase, ShieldCheck } from 'lucide-react';
import './ClientProcess.css';

const steps = [
  { 
    num: '01', 
    title: 'Discovery Conversation', 
    icon: <Compass size={36} strokeWidth={1} />, 
    desc: 'We begin by closely listening to your story, understanding your unique financial situation, personal goals, and core values.' 
  },
  { 
    num: '02', 
    title: 'Financial Assessment', 
    icon: <FileSearch size={36} strokeWidth={1} />, 
    desc: 'Our team conducts a comprehensive deep dive into your current assets, liabilities, cash flow, and hidden opportunities.' 
  },
  { 
    num: '03', 
    title: 'Strategy Development', 
    icon: <Map size={36} strokeWidth={1} />, 
    desc: 'We architect a bespoke, step-by-step financial roadmap tailored specifically to secure your long-term objectives.' 
  },
  { 
    num: '04', 
    title: 'Implementation', 
    icon: <Briefcase size={36} strokeWidth={1} />, 
    desc: 'Executing the structured wealth plan with absolute precision, trusted partnerships, and complete transparency.' 
  },
  { 
    num: '05', 
    title: 'Ongoing Support', 
    icon: <ShieldCheck size={36} strokeWidth={1} />, 
    desc: 'Continuous portfolio monitoring, regular rebalancing, and lifelong strategic guidance as your life evolves.' 
  }
];

const ClientProcess = () => {
  return (
    <section id="process" className="process-v5">
      <div className="container process-layout-v5">
        
        {/* Sticky Left Column */}
        <div className="process-sticky-col">
          <span className="editorial-eyebrow accent-text">The Methodology</span>
          <h2 className="massive-sticky-title">Our <span className="italic-text accent-text">Process</span></h2>
          <p className="sticky-subtitle">Navigating your financial journey with absolute precision, trusted transparency, and a lifelong partnership designed for generational success.</p>
        </div>

        {/* Scrolling Right Column */}
        <div className="process-scroll-col">
          {steps.map((step, index) => (
             <div className="process-dark-card" key={index}>
                <div className="dark-card-number">{step.num}</div>
                <div className="dark-card-content">
                  <div className="dark-card-icon">{step.icon}</div>
                  <h3 className="dark-card-title">{step.title}</h3>
                  <p className="dark-card-desc">{step.desc}</p>
                </div>
             </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ClientProcess;
