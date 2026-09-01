import React, { useEffect, useRef } from 'react';
import './AboutBanner.css';

export default function AboutBanner() {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = true;
      videoRef.current.play().catch((err) => {
        console.log('Video autoplay:', err);
      });
    }
  }, []);

  return (
    <div className="about-banner-card">
      {/* Left Column: Continuous Auto-Looping Video */}
      <div className="about-media-wrapper">
        <video 
          ref={videoRef}
          autoPlay 
          loop 
          muted 
          playsInline
          preload="auto"
          className="about-video-player"
        >
          <source src="/main_page_boxes/video-2.webm" type="video/webm" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Right Column: Text Content & CTA */}
      <div className="about-content-wrapper">
        <div className="about-text-content">
          <span className="about-eyebrow">ABOUT BLINK</span>
          <h3 className="about-title">
            We Create Packaging <br />
            That Builds Brands
          </h3>
          <p className="about-description">
            With a perfect balance of form and function, we craft packaging that protects 
            your product, elevates your brand, and leaves a lasting impression.
          </p>
        </div>

        {/* Complete Botanical Leaf Branch Illustration */}
        <div className="about-botanical-branch" aria-hidden="true">
          <svg 
            width="220" 
            height="340" 
            viewBox="0 0 220 340" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            className="branch-svg"
          >
            {/* Main Central Stem */}
            <path 
              d="M170 340 C165 240 150 140 120 15" 
              stroke="#D4DFD0" 
              strokeWidth="2" 
              strokeLinecap="round" 
            />
            
            {/* Bottom Right Leaf */}
            <path 
              d="M168 290 C195 275 220 285 215 250 C185 240 168 265 168 290 Z" 
              fill="#E1EADF" 
              fillOpacity="0.75"
            />
            {/* Bottom Left Leaf */}
            <path 
              d="M164 260 C130 245 110 258 100 230 C125 215 155 235 164 260 Z" 
              fill="#E1EADF" 
              fillOpacity="0.75"
            />
            
            {/* Mid Right Leaf */}
            <path 
              d="M156 200 C185 180 205 190 200 160 C175 150 156 175 156 200 Z" 
              fill="#E1EADF" 
              fillOpacity="0.75"
            />
            {/* Mid Left Leaf */}
            <path 
              d="M148 165 C118 148 100 160 92 135 C118 122 142 142 148 165 Z" 
              fill="#E1EADF" 
              fillOpacity="0.75"
            />
            
            {/* Upper Right Leaf */}
            <path 
              d="M138 115 C162 98 180 105 178 80 C155 72 138 95 138 115 Z" 
              fill="#E1EADF" 
              fillOpacity="0.75"
            />
            {/* Upper Left Leaf */}
            <path 
              d="M130 85 C108 70 95 80 88 60 C108 50 126 68 130 85 Z" 
              fill="#E1EADF" 
              fillOpacity="0.75"
            />
            
            {/* Top Tip Leaf */}
            <path 
              d="M120 18 C115 -2 128 -5 125 -15 C115 -5 110 8 120 18 Z" 
              fill="#E1EADF" 
              fillOpacity="0.75"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
