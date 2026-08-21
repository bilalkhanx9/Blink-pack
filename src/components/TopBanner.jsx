import React from 'react';
import './TopBanner.css';

export default function TopBanner() {
  return (
    <div className="top-banner">
      <div className="top-banner-content">
        <span className="top-banner-icon">🎁</span>
        <span className="top-banner-text">
          Not sure where to start?{' '}
          <a href="#design-quote" className="top-banner-link">
            We'll design your box for free
          </a>
          {' '}— no cost, no obligation.
        </span>
      </div>
    </div>
  );
}
