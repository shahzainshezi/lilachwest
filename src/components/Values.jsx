import React from 'react';
import { Shield, Scale, Handshake, Heart } from 'lucide-react';
import './Values.css';

const valuesData = [
  { text: 'Trust', icon: <Shield size={48} strokeWidth={1} /> },
  { text: 'Integrity', icon: <Scale size={48} strokeWidth={1} /> },
  { text: 'Commitment', icon: <Handshake size={48} strokeWidth={1} /> },
  { text: 'Long-Term Care', icon: <Heart size={48} strokeWidth={1} /> }
];

const Values = () => {
  return (
    <section className="values-v2">
      <div className="container">
        
        <div className="values-header">
          <h2 className="massive-title">Built on Family.</h2>
          <h2 className="massive-title italic-accent">Driven by Purpose.</h2>
        </div>

        <div className="values-grid">
          {valuesData.map((val, idx) => (
            <div className="value-block" key={idx}>
              <div className="value-icon">{val.icon}</div>
              <h3 className="value-word">{val.text}</h3>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Values;
