import React, { useState } from 'react';
import './ContactPage.css';

export default function ContactPage({ onNavigateHome }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    packagingType: 'corrugated',
    quantity: '1000-5000',
    details: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="contact-page">
      <div className="contact-container">
        
        {/* Top Breadcrumb & Heading */}
        <div className="contact-header reveal-up">
          <nav className="contact-breadcrumbs" aria-label="Breadcrumbs">
            <button 
              type="button" 
              onClick={onNavigateHome} 
              className="breadcrumb-link"
            >
              Home
            </button>
            <span className="breadcrumb-separator">&gt;</span>
            <span className="breadcrumb-current">Contact Us</span>
          </nav>

          <h1 className="contact-title">Get in Touch</h1>
          <p className="contact-intro">
            Tell us about your packaging project. We provide complimentary design concepts and landed-cost quotations within 24 hours.
          </p>
        </div>

        {/* Main Grid: Clean Form on Left + Clean Editorial Info on Right */}
        <div className="contact-grid reveal-up">
          
          {/* Left Column: Form */}
          <div className="contact-form-column">
            {isSubmitted ? (
              <div className="contact-success-box">
                <h3 className="success-title">Enquiry Received</h3>
                <p className="success-desc">
                  Thank you, {formData.name || 'there'}. Our packaging team is reviewing your specifications and will respond with initial mockups and pricing within one business day.
                </p>
                <button 
                  type="button" 
                  onClick={() => setIsSubmitted(false)}
                  className="btn-reset-form"
                >
                  Submit Another Enquiry
                </button>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                
                <div className="form-row">
                  <div className="form-field">
                    <label htmlFor="name" className="field-label">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      placeholder="Your name"
                      value={formData.name}
                      onChange={handleChange}
                      className="field-input"
                    />
                  </div>

                  <div className="form-field">
                    <label htmlFor="company" className="field-label">Brand / Company</label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      placeholder="Company name"
                      value={formData.company}
                      onChange={handleChange}
                      className="field-input"
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-field">
                    <label htmlFor="email" className="field-label">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      placeholder="you@company.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="field-input"
                    />
                  </div>

                  <div className="form-field">
                    <label htmlFor="phone" className="field-label">Phone / WhatsApp</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      placeholder="+1 (555) 000-0000"
                      value={formData.phone}
                      onChange={handleChange}
                      className="field-input"
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-field">
                    <label htmlFor="packagingType" className="field-label">Packaging Type *</label>
                    <select
                      id="packagingType"
                      name="packagingType"
                      value={formData.packagingType}
                      onChange={handleChange}
                      className="field-select"
                    >
                      <option value="corrugated">Corrugate / Mailer Box</option>
                      <option value="tuck">Tuck Box (STE / RTE / Auto-Lock)</option>
                      <option value="fliptop">Flip Top Box (Magnetic / Rigid)</option>
                      <option value="gable">Gable Box (Carry Handle)</option>
                      <option value="display">Display Box</option>
                      <option value="pouches">Bags &amp; Mylar Pouches</option>
                      <option value="custom">Custom / Other</option>
                    </select>
                  </div>

                  <div className="form-field">
                    <label htmlFor="quantity" className="field-label">Estimated Quantity *</label>
                    <select
                      id="quantity"
                      name="quantity"
                      value={formData.quantity}
                      onChange={handleChange}
                      className="field-select"
                    >
                      <option value="500-1000">500 – 1,000 units</option>
                      <option value="1000-5000">1,000 – 5,000 units</option>
                      <option value="5000-10000">5,000 – 10,000 units</option>
                      <option value="10000+">10,000+ units</option>
                      <option value="samples">Sample pack only</option>
                    </select>
                  </div>
                </div>

                <div className="form-field field-full">
                  <label htmlFor="details" className="field-label">Project Brief &amp; Dimensions</label>
                  <textarea
                    id="details"
                    name="details"
                    rows="3"
                    placeholder="Provide your dimensions (L × W × H), intended product, or required finishes..."
                    value={formData.details}
                    onChange={handleChange}
                    className="field-textarea"
                  />
                </div>

                <div className="form-submit-row">
                  <button type="submit" className="btn-submit-enquiry">
                    <span>Send Enquiry</span>
                    <span className="submit-arrow">→</span>
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Right Column: Clean Editorial Info */}
          <div className="contact-info-column">
            
            <div className="info-block">
              <h3 className="info-title">Studio &amp; Inquiries</h3>
              <div className="info-item">
                <span className="info-label">Email</span>
                <a href="mailto:hello@blinkpackaging.com" className="info-link">
                  hello@blinkpackaging.com
                </a>
              </div>
              <div className="info-item">
                <span className="info-label">Phone &amp; WhatsApp</span>
                <span className="info-text">+1 (800) 555-BLINK</span>
              </div>
              <div className="info-item">
                <span className="info-label">Hours</span>
                <span className="info-text">Monday – Friday, 8:00 AM – 6:00 PM EST</span>
              </div>
            </div>

            <div className="info-divider"></div>

            <div className="info-block">
              <h3 className="info-title">Our Service Standard</h3>
              <ul className="info-standards-list">
                <li>
                  <strong>24-Hour Turnaround:</strong> Complimentary dielines &amp; 3D concepts.
                </li>
                <li>
                  <strong>Production Samples:</strong> Hard prototypes matched before bulk print.
                </li>
                <li>
                  <strong>No Hidden Fees:</strong> Design work is free; you only pay to produce.
                </li>
              </ul>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
