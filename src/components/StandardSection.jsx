import React from 'react';
import './StandardSection.css';

const standardItems = [
  {
    numeral: 'I.',
    title: 'Careful Sourcing',
    description: 'Production partners chosen for consistency, not the lowest figure quoted.'
  },
  {
    numeral: 'II.',
    title: 'Direct Communication',
    description: 'One point of contact, clear specification, honest timelines.'
  },
  {
    numeral: 'III.',
    title: 'Quality Control',
    description: 'Every run inspected against your approved sample before release.'
  },
  {
    numeral: 'IV.',
    title: 'Transparent Terms',
    description: 'Quotations built from true landed cost — nothing added after the fact.'
  }
];

export default function StandardSection() {
  return (
    <section className="standard-section" id="standard">
      <div className="standard-container">
        
        {/* Section Header */}
        <div className="standard-header reveal-up">
          <div className="standard-eyebrow-wrapper">
            <span className="standard-eyebrow-line" aria-hidden="true"></span>
            <span className="standard-eyebrow">THE STANDARD</span>
          </div>
          <h2 className="standard-title">
            Not the cheapest quotation. The <br className="title-break" />
            most accountable one.
          </h2>
          <p className="standard-description">
            Sourcing, sales, and quality control conducted with the same care you bring to your own product.
          </p>
        </div>

        {/* 4-Card Principles Grid */}
        <div className="standard-grid reveal-stagger">
          {standardItems.map((item, index) => (
            <div key={index} className="standard-card">
              <span className="standard-numeral">{item.numeral}</span>
              <h3 className="standard-card-title">{item.title}</h3>
              <p className="standard-card-desc">{item.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
