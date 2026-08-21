import React from 'react';
import AboutBanner from './AboutBanner';
import './ProcessSection.css';

const processSteps = [
  {
    id: 1,
    number: '1.',
    title: 'Share Your Idea',
    description: 'Tell us about your product and packaging needs.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#3F5D3D" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        <line x1="8" y1="9" x2="16" y2="9" />
        <line x1="8" y1="13" x2="13" y2="13" />
      </svg>
    )
  },
  {
    id: 2,
    number: '2.',
    title: 'We Design',
    description: 'We create mockups tailored to your brand.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#3F5D3D" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 19l7-7 3 3-7 7-3-3z" />
        <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
        <path d="M2 2l7.586 7.586" />
        <circle cx="11" cy="11" r="2" />
      </svg>
    )
  },
  {
    id: 3,
    number: '3.',
    title: 'We Produce',
    description: 'Precision manufacturing with quality you can feel.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#3F5D3D" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
        <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
        <line x1="12" y1="22.08" x2="12" y2="12" />
      </svg>
    )
  },
  {
    id: 4,
    number: '4.',
    title: 'We Deliver',
    description: 'Delivered to your door, on time every time.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#3F5D3D" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="3" width="15" height="13" rx="1" />
        <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
        <circle cx="5.5" cy="18.5" r="2.5" />
        <circle cx="18.5" cy="18.5" r="2.5" />
      </svg>
    )
  }
];

export default function ProcessSection() {
  return (
    <section className="process-section" id="process">
      <div className="process-container">
        {/* Header */}
        <div className="process-header reveal-up">
          <div className="process-eyebrow-wrapper">
            <span className="process-eyebrow-line" aria-hidden="true"></span>
            <span className="process-eyebrow">THE PROCESS</span>
          </div>
          <h2 className="process-title">An orderly path to a finished box.</h2>
          <p className="process-subtitle">
            You need not abandon an existing supplier to work with us. Most accounts begin with a single run.
          </p>
        </div>

        {/* 4 Step Timeline Flow */}
        <div className="process-timeline reveal-stagger">
          {processSteps.map((step, index) => (
            <React.Fragment key={step.id}>
              <div className="process-step">
                <div className="step-icon-circle">
                  {step.icon}
                </div>
                <div className="step-content">
                  <h3 className="step-title">
                    <span className="step-num">{step.number}</span> {step.title}
                  </h3>
                  <p className="step-description">{step.description}</p>
                </div>
              </div>
              {index < processSteps.length - 1 && (
                <div className="process-connector" aria-hidden="true"></div>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* About Blink Video / Feature Card */}
        <div className="reveal-up delay-200">
          <AboutBanner />
        </div>
      </div>
    </section>
  );
}
