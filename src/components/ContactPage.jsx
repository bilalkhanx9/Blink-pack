import React, { useState } from 'react';
import './ContactPage.css';

export default function ContactPage({ onNavigateHome, onSelectType }) {
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
      {/* Top Header / Breadcrumb Section */}
      <section className="contact-hero-section">
        <div className="contact-hero-container">
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
        </div>
      </section>

      {/* Main Grid: Form on Left + Contact Cards & Assurance on Right */}
      <section className="contact-main-section">
        <div className="contact-main-container">
          
          {/* Left Column: Interactive Form */}
          <div className="contact-form-wrapper">
            {isSubmitted ? (
              <div className="contact-success-state">
                <div className="success-icon-circle">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#3F5D3D" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <h3 className="success-title">Thank You, {formData.name || 'there'}!</h3>
                <p className="success-desc">
                  Your packaging enquiry has been received. Our packaging engineers 
                  will review your specifications and get back to you with free design concepts 
                  within 24 hours.
                </p>
                <button 
                  type="button" 
                  onClick={() => setIsSubmitted(false)}
                  className="btn-submit-another"
                >
                  Send Another Enquiry
                </button>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-header">
                  <h2 className="form-heading">Request a Free Concept &amp; Quote</h2>
                  <p className="form-subheading">Fill out your project details below</p>
                </div>

                {/* Name & Company */}
                <div className="form-row-2col">
                  <div className="form-group">
                    <label htmlFor="name" className="form-label">
                      Full Name <span className="req">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      placeholder="Jane Doe"
                      value={formData.name}
                      onChange={handleChange}
                      className="form-input"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="company" className="form-label">
                      Brand / Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      placeholder="Bespoke Skincare Co."
                      value={formData.company}
                      onChange={handleChange}
                      className="form-input"
                    />
                  </div>
                </div>

                {/* Email & Phone */}
                <div className="form-row-2col">
                  <div className="form-group">
                    <label htmlFor="email" className="form-label">
                      Email Address <span className="req">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      placeholder="jane@yourbrand.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="form-input"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="phone" className="form-label">
                      Phone / WhatsApp Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      placeholder="+1 (555) 000-0000"
                      value={formData.phone}
                      onChange={handleChange}
                      className="form-input"
                    />
                  </div>
                </div>

                {/* Packaging Type & Estimated Quantity */}
                <div className="form-row-2col">
                  <div className="form-group">
                    <label htmlFor="packagingType" className="form-label">
                      Packaging Style <span className="req">*</span>
                    </label>
                    <select
                      id="packagingType"
                      name="packagingType"
                      value={formData.packagingType}
                      onChange={handleChange}
                      className="form-select"
                    >
                      <option value="corrugated">Corrugate / Mailer Box</option>
                      <option value="tuck">Tuck Box (STE / RTE / Auto-lock)</option>
                      <option value="fliptop">Flip Top Box (Magnetic / Rigid)</option>
                      <option value="gable">Gable Box (Carry Handle)</option>
                      <option value="display">Retail Counter Display Box</option>
                      <option value="pouches">Bags &amp; Stand-Up Pouches</option>
                      <option value="custom">Custom / Other Style</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="quantity" className="form-label">
                      Estimated Quantity <span className="req">*</span>
                    </label>
                    <select
                      id="quantity"
                      name="quantity"
                      value={formData.quantity}
                      onChange={handleChange}
                      className="form-select"
                    >
                      <option value="500-1000">500 – 1,000 units</option>
                      <option value="1000-5000">1,000 – 5,000 units</option>
                      <option value="5000-10000">5,000 – 10,000 units</option>
                      <option value="10000+">10,000+ units (Bulk)</option>
                      <option value="samples">Sample / Prototype only</option>
                    </select>
                  </div>
                </div>

                {/* Project Details */}
                <div className="form-group">
                  <label htmlFor="details" className="form-label">
                    Project Details &amp; Dimensions <span className="optional">(Optional)</span>
                  </label>
                  <textarea
                    id="details"
                    name="details"
                    rows="4"
                    placeholder="Tell us about your product dimensions (L x W x H), required finishes (foil, spot UV, matte/gloss), or special requirements..."
                    value={formData.details}
                    onChange={handleChange}
                    className="form-textarea"
                  />
                </div>

                {/* Submit Action Button */}
                <div className="form-actions">
                  <button type="submit" className="btn-contact-submit">
                    <span>Submit Enquiry for Free Concept</span>
                    <span className="submit-arrow">→</span>
                  </button>
                  <span className="form-privacy-note">
                    🔒 Zero obligation. We never share your contact information.
                  </span>
                </div>
              </form>
            )}
          </div>

          {/* Right Column: Contact Details & Assurance Cards */}
          <div className="contact-sidebar-info">
            
            {/* 1. Direct Contact Cards */}
            <div className="contact-card">
              <h3 className="card-heading">Direct Channels</h3>
              
              <div className="contact-channel-item">
                <div className="channel-icon-circle">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#3F5D3D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </div>
                <div className="channel-text">
                  <span className="channel-label">Email Us</span>
                  <a href="mailto:hello@blinkcustompackaging.com" className="channel-value">
                    hello@blinkpackaging.com
                  </a>
                </div>
              </div>

              <div className="contact-channel-item">
                <div className="channel-icon-circle">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#3F5D3D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </div>
                <div className="channel-text">
                  <span className="channel-label">Phone &amp; WhatsApp</span>
                  <span className="channel-value">+1 (800) 555-BLINK</span>
                </div>
              </div>

              <div className="contact-channel-item">
                <div className="channel-icon-circle">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#3F5D3D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                </div>
                <div className="channel-text">
                  <span className="channel-label">Operating Hours</span>
                  <span className="channel-value">Mon – Fri: 8:00 AM – 6:00 PM EST</span>
                </div>
              </div>
            </div>

            {/* 2. Our Quality Guarantees */}
            <div className="contact-card guarantees-card">
              <h3 className="card-heading">The Blink Guarantee</h3>
              <ul className="guarantees-list">
                <li className="guarantee-item">
                  <span className="guarantee-icon">✓</span>
                  <div>
                    <strong>24-Hour Concept Turnaround:</strong>
                    <p>Initial 3D mockup and pricing estimate within one business day.</p>
                  </div>
                </li>
                <li className="guarantee-item">
                  <span className="guarantee-icon">✓</span>
                  <div>
                    <strong>Complimentary Dielines &amp; Design:</strong>
                    <p>Free custom dieline templates for your designer or in-house layout service.</p>
                  </div>
                </li>
                <li className="guarantee-item">
                  <span className="guarantee-icon">✓</span>
                  <div>
                    <strong>Pre-production Hard Samples:</strong>
                    <p>Receive an exact physical prototype before we print the entire run.</p>
                  </div>
                </li>
              </ul>
            </div>

          </div>

        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="contact-faq-section">
        <div className="contact-faq-container">
          <div className="faq-header">
            <span className="faq-eyebrow">COMMON QUESTIONS</span>
            <h2 className="faq-title">Frequently Asked Questions</h2>
          </div>

          <div className="faq-grid">
            <div className="faq-card">
              <h4 className="faq-q">What is your minimum order quantity (MOQ)?</h4>
              <p className="faq-a">
                Our standard MOQ starts at 500 units for folding cartons and tuck boxes, 
                and 1,000 units for custom rigid and mailer boxes. We also produce 
                small-batch sample prototypes for concept testing.
              </p>
            </div>

            <div className="faq-card">
              <h4 className="faq-q">Can I request physical material samples?</h4>
              <p className="faq-a">
                Yes! We offer a sample pack with our most popular finishes, foil stamp swatches, 
                textured krafts, and board thicknesses sent straight to your door.
              </p>
            </div>

            <div className="faq-card">
              <h4 className="faq-q">How does the free design process work?</h4>
              <p className="faq-a">
                You provide your product specs or logo files, and our engineers create 
                a customized dieline and 3D visual preview. You only pay when you approve 
                the proof and authorize production.
              </p>
            </div>

            <div className="faq-card">
              <h4 className="faq-q">What are your production and shipping lead times?</h4>
              <p className="faq-a">
                Digital sample prototypes take 3–5 business days. Full bulk production 
                typically ships in 10–14 business days, with expedited freight available.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
