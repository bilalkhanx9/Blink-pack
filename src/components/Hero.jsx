import React from 'react';
import './Hero.css';

export default function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-container">

        {/* Hero Main Content Grid (Left: Copy & CTA, Right: Packaging Mockup) */}
        <div className="hero-grid">
          {/* Left Column: Typography & Action Buttons */}
          <div className="hero-content reveal-up">

            <div className="hero-eyebrow">
              MADE TO ORDER
            </div>

            <h1 className="hero-title">
              Packaging that <br />
              feels like <em className="italic-craft">craft</em>, <br />
              not commerce.
            </h1>

            <p className="hero-description">
              Blink Custom Packaging designs and produces bespoke boxes, cartons, 
              and pouches for skincare, botanical, and supplement brands who treat 
              presentation as part of the product itself.
            </p>

            <div className="hero-cta-group">
              <a href="#range" className="btn-hero-primary">
                <span>Explore Our Range</span>
                <span className="arrow-icon">→</span>
              </a>

              <a href="#process" className="btn-hero-secondary">
                <span>See How It Works</span>
                <span className="play-icon-wrapper">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="10" stroke="#3F5D3D" strokeWidth="1.5" />
                    <path d="M10 8.5L16 12L10 15.5V8.5Z" fill="#3F5D3D" />
                  </svg>
                </span>
              </a>
            </div>
          </div>

          {/* Right Column: Hero Packaging Visual Mockup */}
          <div className="hero-visual-wrapper reveal-fade delay-200">
            <img 
              src="/main.webp" 
              alt="Blink Custom Packaging - Bespoke Boxes and Cartons" 
              className="hero-image"
              loading="eager"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
