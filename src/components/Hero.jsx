import React from 'react';
import './Hero.css';

export default function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-container">

        {/* 1. Cinematic Video Showcase on Top */}
        <div className="hero-video-showcase">
          <div className="hero-video-frame">
            <video 
              src="/boxes-videos/hero.webm" 
              className="hero-showcase-video" 
              autoPlay 
              loop 
              muted 
              playsInline 
              preload="auto"
            />
          </div>
        </div>

        {/* 2. Header Copy & Actions Below Video */}
        <div className="hero-header-content">
          <div className="hero-eyebrow">
            MADE TO ORDER
          </div>

          <h1 className="hero-title">
            Packaging that feels like <em className="italic-craft">craft</em>, not commerce.
          </h1>

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

      </div>
    </section>
  );
}

