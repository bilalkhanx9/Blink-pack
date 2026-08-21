import React from 'react';
import './CallToActionBanner.css';

export default function CallToActionBanner() {
  return (
    <section className="cta-banner-section" id="contact">
      <div className="cta-banner-container reveal-up">
        
        {/* Main Headline */}
        <h2 className="cta-banner-title">
          Begin with <em className="cta-italic-accent">one</em> box.
        </h2>

        {/* Subtitle / Description */}
        <p className="cta-banner-description">
          Send your dimensions, quantity, and intended launch date. A 
          landed-cost proposal and sample timeline will follow.
        </p>

        {/* CTA Buttons */}
        <div className="cta-banner-actions">
          <a href="#quote" className="btn-cta-primary">
            Request a Quotation
          </a>
          <a href="#samples" className="btn-cta-secondary">
            Enquire About Samples
          </a>
        </div>

      </div>
    </section>
  );
}
