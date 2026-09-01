import React from 'react';
import './FreeDesignBanner.css';

export default function FreeDesignBanner({ onNavigateContact }) {
  const handleCtaClick = (e) => {
    if (onNavigateContact) {
      e.preventDefault();
      onNavigateContact();
    }
  };

  return (
    <section className="free-design-section" id="how-it-works">
      <div className="free-design-container">
        
        {/* Left Column: Eyebrow with Line + Large Display Headline */}
        <div className="free-design-left reveal-up">
          <div className="free-design-eyebrow-wrapper">
            <span className="free-design-eyebrow-line" aria-hidden="true"></span>
            <span className="free-design-eyebrow">HOW IT WORKS</span>
          </div>
          <h2 className="free-design-title">
            Design is <em className="italic-free">free.</em> You only pay to produce.
          </h2>
        </div>

        {/* Right Column: Paragraph Description + CTA Button */}
        <div className="free-design-right reveal-up delay-200">
          <p className="free-design-description">
            Every enquiry includes complimentary design concepts for your box — 
            structure, layout, and finish options to choose from before a single unit 
            goes into production. No design fee, no obligation until you approve a direction.
          </p>
          <div className="free-design-cta">
            <a href="#contact" className="btn-free-concept" onClick={handleCtaClick}>
              Start With a Free Concept
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
