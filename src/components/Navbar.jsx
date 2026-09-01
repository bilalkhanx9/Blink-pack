import React, { useState } from 'react';
import './Navbar.css';

export default function Navbar({ onNavigateHome, onNavigateContact }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleLogoClick = (e) => {
    e.preventDefault();
    if (onNavigateHome) onNavigateHome();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleContactClick = (e) => {
    e.preventDefault();
    if (onNavigateContact) onNavigateContact();
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="navbar-header">
      <div className="navbar-container">
        {/* Brandmark / Logo */}
        <a 
          href="/" 
          className="brandmark" 
          aria-label="Blink Custom Packaging"
          onClick={handleLogoClick}
        >
          <div className="logo-icon-wrapper">
            <svg 
              width="36" 
              height="36" 
              viewBox="0 0 64 64" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="32" cy="32" r="29" stroke="#3F5D3D" strokeWidth="1.5" />
              {/* Botanical Leaf / Branch */}
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
          <div className="brand-text">
            <span className="brand-name">Blink</span>
            <span className="brand-sub">CUSTOM PACKAGING</span>
          </div>
        </a>

        {/* Desktop Navigation Links & Action Buttons */}
        <div className="nav-desktop">
          <nav className="nav-links">
            <a 
              href="#explore" 
              className="nav-link"
              onClick={(e) => {
                if (onNavigateHome) {
                  onNavigateHome();
                  setTimeout(() => {
                    document.getElementById('explore')?.scrollIntoView({ behavior: 'smooth' });
                  }, 100);
                }
              }}
            >
              Explore
            </a>
            <a 
              href="#range" 
              className="nav-link"
              onClick={(e) => {
                if (onNavigateHome) {
                  onNavigateHome();
                  setTimeout(() => {
                    document.getElementById('range')?.scrollIntoView({ behavior: 'smooth' });
                  }, 100);
                }
              }}
            >
              Range
            </a>
            <a 
              href="#process" 
              className="nav-link"
              onClick={(e) => {
                if (onNavigateHome) {
                  onNavigateHome();
                  setTimeout(() => {
                    document.getElementById('process')?.scrollIntoView({ behavior: 'smooth' });
                  }, 100);
                }
              }}
            >
              Process
            </a>
          </nav>

          <div className="nav-actions">
            <a 
              href="#contact" 
              className="btn-contact-primary"
              onClick={handleContactClick}
            >
              Contact Us
            </a>
          </div>
        </div>

        {/* Mobile Hamburger Menu Toggle Button */}
        <button 
          className="mobile-menu-btn" 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={isMobileMenuOpen}
        >
          <span className={`bar ${isMobileMenuOpen ? 'open' : ''}`}></span>
          <span className={`bar ${isMobileMenuOpen ? 'open' : ''}`}></span>
          <span className={`bar ${isMobileMenuOpen ? 'open' : ''}`}></span>
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMobileMenuOpen && (
        <div className="mobile-nav-dropdown">
          <nav className="mobile-nav-links">
            <a 
              href="#explore" 
              className="mobile-nav-link"
              onClick={() => {
                setIsMobileMenuOpen(false);
                if (onNavigateHome) {
                  onNavigateHome();
                  setTimeout(() => {
                    document.getElementById('explore')?.scrollIntoView({ behavior: 'smooth' });
                  }, 100);
                }
              }}
            >
              Explore
            </a>
            <a 
              href="#range" 
              className="mobile-nav-link"
              onClick={() => {
                setIsMobileMenuOpen(false);
                if (onNavigateHome) {
                  onNavigateHome();
                  setTimeout(() => {
                    document.getElementById('range')?.scrollIntoView({ behavior: 'smooth' });
                  }, 100);
                }
              }}
            >
              Range
            </a>
            <a 
              href="#process" 
              className="mobile-nav-link"
              onClick={() => {
                setIsMobileMenuOpen(false);
                if (onNavigateHome) {
                  onNavigateHome();
                  setTimeout(() => {
                    document.getElementById('process')?.scrollIntoView({ behavior: 'smooth' });
                  }, 100);
                }
              }}
            >
              Process
            </a>
          </nav>

          <div className="mobile-nav-actions">
            <a 
              href="#contact" 
              className="btn-contact-primary full-width"
              onClick={handleContactClick}
            >
              Contact Us
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
