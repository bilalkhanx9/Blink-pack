import React from 'react';
import './Footer.css';

export default function Footer({ onNavigateHome, onSelectType }) {
  const handleLogoClick = (e) => {
    e.preventDefault();
    if (onNavigateHome) {
      onNavigateHome();
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleLinkClick = (typeId) => {
    if (onSelectType) {
      onSelectType(typeId);
    }
  };

  return (
    <footer className="site-footer">
      <div className="footer-container">
        
        {/* Main Footer 4-Column Grid */}
        <div className="footer-grid">
          
          {/* Column 1: Brand & Bio */}
          <div className="footer-brand-col">
            <a 
              href="/" 
              className="footer-brandmark" 
              onClick={handleLogoClick}
              aria-label="Blink Custom Packaging"
            >
              <div className="footer-logo-icon">
                <svg 
                  width="32" 
                  height="32" 
                  viewBox="0 0 64 64" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="32" cy="32" r="29" stroke="#3F5D3D" strokeWidth="1.5" />
                  <path 
                    d="M32 14 L32 50" 
                    stroke="#3F5D3D" 
                    strokeWidth="1.5" 
                    strokeLinecap="round" 
                  />
                  <path 
                    d="M32 28 C25 24 20 29 23 37 C26 40 32 35 32 35" 
                    stroke="#3F5D3D" 
                    strokeWidth="1.5" 
                    strokeLinecap="round" 
                    fill="none" 
                  />
                  <path 
                    d="M32 20 C39 16 44 21 41 29 C38 32 32 27 32 27" 
                    stroke="#3F5D3D" 
                    strokeWidth="1.5" 
                    strokeLinecap="round" 
                    fill="none" 
                  />
                </svg>
              </div>
              <div className="footer-brand-text">
                <span className="footer-brand-name">Blink</span>
                <span className="footer-brand-sub">CUSTOM PACKAGING</span>
              </div>
            </a>
            
            <p className="footer-mission-text">
              Bespoke boxes, cartons, and pouches for brands that treat presentation as part of the product. By enquiry only.
            </p>
          </div>

          {/* Column 2: The Range */}
          <div className="footer-links-col">
            <h4 className="footer-col-title">THE RANGE</h4>
            <ul className="footer-links-list">
              <li>
                <a href="#range" onClick={() => handleLinkClick('tuck')}>Tuck Boxes</a>
              </li>
              <li>
                <a href="#range" onClick={() => handleLinkClick('pouches')}>Mylar Pouches</a>
              </li>
              <li>
                <a href="#range" onClick={() => handleLinkClick('corrugated')}>Botanical Packaging</a>
              </li>
              <li>
                <a href="#range" onClick={() => handleLinkClick('display')}>Cosmetic Cartons</a>
              </li>
            </ul>
          </div>

          {/* Column 3: Company */}
          <div className="footer-links-col">
            <h4 className="footer-col-title">COMPANY</h4>
            <ul className="footer-links-list">
              <li>
                <a href="#process">Process</a>
              </li>
              <li>
                <a href="#range">Explore</a>
              </li>
              <li>
                <a href="#range">The Range</a>
              </li>
            </ul>
          </div>

          {/* Column 4: Enquire */}
          <div className="footer-links-col">
            <h4 className="footer-col-title">ENQUIRE</h4>
            <ul className="footer-links-list">
              <li>
                <a href="#contact">Contact Us</a>
              </li>
              <li>
                <a href="#contact">Request a Quotation</a>
              </li>
              <li>
                <a href="#contact">Request a Sample</a>
              </li>
            </ul>
          </div>

        </div>

        {/* Footer Bottom / Copyright Bar */}
        <div className="footer-bottom-bar">
          <p className="footer-copyright">
            © 2026 Blink Custom Packaging. All rights reserved.
          </p>
          <span className="footer-credit">
            @ inovex system
          </span>
        </div>

      </div>
    </footer>
  );
}
