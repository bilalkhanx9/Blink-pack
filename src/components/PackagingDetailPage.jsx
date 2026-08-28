import React, { useState, useEffect } from 'react';
import './PackagingDetailPage.css';
import { packagingTypes } from '../data/packagingData';

export default function PackagingDetailPage({ packagingType, onNavigateHome, onSelectType }) {
  if (!packagingType) return null;

  const subTypes = packagingType.subTypes || [];

  const [activeSubTypeId, setActiveSubTypeId] = useState(subTypes[0]?.id || null);

  // When packagingType changes, reset to its first sub-type
  useEffect(() => {
    if (subTypes.length > 0) {
      setActiveSubTypeId(subTypes[0].id);
    }
  }, [packagingType.id]);

  const activeSubType = subTypes.find((s) => s.id === activeSubTypeId) || subTypes[0];

  const handleSelectSubType = (st) => {
    setActiveSubTypeId(st.id);
  };

  const otherTypes = packagingTypes.filter((item) => item.id !== packagingType.id);

  return (
    <div className="packaging-detail-page">
      
      {/* ====================================================================
          1. Top Hero / Header Section
          ==================================================================== */}
      <section className="detail-hero-section">
        <div className="detail-hero-container">
          
          {/* Left Column: Breadcrumbs, Title, Description, Feature Badges */}
          <div className="detail-hero-content">
            {/* Breadcrumbs */}
            <nav className="detail-breadcrumbs" aria-label="Breadcrumbs">
              <button 
                type="button" 
                onClick={onNavigateHome} 
                className="breadcrumb-link"
              >
                Home
              </button>
              <span className="breadcrumb-separator">&gt;</span>
              <button 
                type="button" 
                onClick={onNavigateHome} 
                className="breadcrumb-link"
              >
                Packaging Types
              </button>
              <span className="breadcrumb-separator">&gt;</span>
              <span className="breadcrumb-current">{packagingType.title}</span>
            </nav>

            {/* Eyebrow */}
            <span className="detail-eyebrow">{packagingType.eyebrow}</span>

            {/* Main Title */}
            <h1 className="detail-title">{packagingType.title}</h1>

            {/* Description */}
            <p className="detail-description">{packagingType.description}</p>

            {/* 3 Feature Badges Row */}
            <div className="detail-feature-badges">
              {/* Badge 1: Durable */}
              <div className="feature-badge-item">
                <div className="feature-badge-circle">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#3F5D3D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    <polyline points="9 12 11 14 15 10" />
                  </svg>
                </div>
                <span className="feature-badge-label">Durable</span>
              </div>

              {/* Badge 2: Eco Friendly */}
              <div className="feature-badge-item">
                <div className="feature-badge-circle">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#3F5D3D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
                    <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
                  </svg>
                </div>
                <span className="feature-badge-label">Eco Friendly</span>
              </div>

              {/* Badge 3: Fully Customizable */}
              <div className="feature-badge-item">
                <div className="feature-badge-circle">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#3F5D3D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 19l7-7 3 3-7 7-3-3z" />
                    <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
                    <path d="M2 2l7.586 7.586" />
                    <circle cx="11" cy="11" r="2" />
                  </svg>
                </div>
                <span className="feature-badge-label">Fully Customizable</span>
              </div>
            </div>
          </div>

          {/* Right Column: Circular Backdrop Mockup Visual */}
          <div className="detail-hero-visual">
            <div className="detail-circle-backdrop">
              <img 
                src={packagingType.image} 
                alt={`${packagingType.title} Packaging Mockup`} 
                className="detail-mockup-img"
              />
            </div>
          </div>

        </div>
      </section>

      {/* ====================================================================
          2. Interactive Sub-types Explorer Section (Full-Width Large Image + Info Below)
          ==================================================================== */}
      {subTypes.length > 0 && activeSubType && (
        <section className="subtypes-explorer-section">
          <div className="subtypes-container">
            
            {/* Left Sidebar: Sub-types List & Column-wise Details */}
            <aside className="subtypes-sidebar">
              <h3 className="sidebar-heading">Sub-types ({subTypes.length})</h3>
              <div className="subtypes-list">
                {subTypes.map((st) => {
                  const isActive = st.id === activeSubType.id;
                  return (
                    <button
                      key={st.id}
                      type="button"
                      className={`subtype-nav-item ${isActive ? 'active' : ''}`}
                      onClick={() => handleSelectSubType(st)}
                    >
                      <div className="subtype-thumb-box">
                        <img 
                          src={st.thumb} 
                          alt={st.title} 
                          className="subtype-thumb-img" 
                        />
                      </div>
                      <span className="subtype-nav-title">{st.shortTitle}</span>
                    </button>
                  );
                })}
              </div>

              {/* Sidebar Column Details Under Sub-types */}
              <div className="sidebar-details-column">
                
                {/* 1. Best For */}
                {activeSubType.bestFor && activeSubType.bestFor.length > 0 && (
                  <div className="sidebar-info-block">
                    <h4 className="sidebar-info-title">
                      <span className="sidebar-info-icon">🎯</span>
                      Best For
                    </h4>
                    <ul className="sidebar-best-for-list">
                      {activeSubType.bestFor.map((bf, idx) => (
                        <li key={idx} className="sidebar-best-for-item">
                          <span className="best-for-icon">{bf.icon}</span>
                          <span className="best-for-label">{bf.label}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* 2. Material */}
                {activeSubType.material && (
                  <div className="sidebar-info-block">
                    <span className="sidebar-spec-eyebrow">MATERIAL</span>
                    <p className="sidebar-spec-value">{activeSubType.material}</p>
                  </div>
                )}

                {/* 3. Lamination */}
                <div className="sidebar-info-block">
                  <span className="sidebar-spec-eyebrow">LAMINATION</span>
                  <p className="sidebar-spec-value">{activeSubType.lamination || 'Matte or glossy'}</p>
                </div>

                {/* 4. Add-ons */}
                <div className="sidebar-info-block">
                  <span className="sidebar-spec-eyebrow">ADD-ONS</span>
                  <p className="sidebar-spec-value">{activeSubType.addOns || 'Gold foil, spot UV, metallic print'}</p>
                </div>

                {/* 4. Customization Options */}
                <div className="sidebar-info-block">
                  <h4 className="sidebar-info-title">
                    <span className="sidebar-info-icon">⚙️</span>
                    Customization Options
                  </h4>
                  <div className="sidebar-custom-options-row">
                    <div className="custom-opt-pill">
                      <div className="custom-opt-icon">📦</div>
                      <span className="custom-opt-label">Size</span>
                    </div>
                    <div className="custom-opt-pill">
                      <div className="custom-opt-icon">🎨</div>
                      <span className="custom-opt-label">Print</span>
                    </div>
                    <div className="custom-opt-pill">
                      <div className="custom-opt-icon">✨</div>
                      <span className="custom-opt-label">Finish</span>
                    </div>
                    <div className="custom-opt-pill">
                      <div className="custom-opt-icon">🏷️</div>
                      <span className="custom-opt-label">Insert</span>
                    </div>
                  </div>
                </div>

                {/* 4. CTA Action */}
                <div className="sidebar-action-cta">
                  <a href="#contact" className="btn-subtype-enquire">
                    Request Free Concept
                  </a>
                </div>

              </div>
            </aside>

            {/* Right Main Panel: Large Image on Top & Rich Description Below */}
            <main className="subtype-detail-panel">
              
              {/* 1. Large Main Picture / Video Showcase */}
              <div className="subtype-main-img-box">
                {activeSubType.video ? (
                  <video 
                    key={activeSubType.video}
                    src={activeSubType.video} 
                    className="subtype-main-video"
                    autoPlay 
                    loop 
                    muted 
                    playsInline
                    preload="auto"
                  />
                ) : (
                  <img 
                    src={activeSubType.mainImage || activeSubType.thumb || packagingType.image} 
                    alt={activeSubType.title} 
                    className="subtype-main-img"
                  />
                )}
              </div>

              {/* 2. Product Description & Key Features Area Below Product */}
              <div className="subtype-content-body">
                
                {/* Detailed Description Paragraphs */}
                <div className="subtype-description-block">
                  {activeSubType.detailedDescription ? (
                    activeSubType.detailedDescription.map((paragraph, pIdx) => (
                      <p key={pIdx} className="subtype-long-desc">{paragraph}</p>
                    ))
                  ) : (
                    <p className="subtype-long-desc">{activeSubType.description}</p>
                  )}
                </div>

                {/* Key Features List */}
                {activeSubType.keyFeatures && activeSubType.keyFeatures.length > 0 && (
                  <div className="subtype-features-block">
                    <h3 className="subtype-features-heading">Key Features:</h3>
                    <ul className="subtype-features-checklist">
                      {activeSubType.keyFeatures.map((kf, idx) => (
                        <li key={idx} className="subtype-feature-item">
                          <span className="feature-check-icon">✓</span>
                          <span>{kf}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

              </div>

            </main>

          </div>
        </section>
      )}

      {/* ====================================================================
          3. Explore Other Box Types Navigation Grid
          ==================================================================== */}
      <section className="detail-related-section">
        <div className="detail-related-container">
          <div className="related-header">
            <span className="related-eyebrow">EXPLORE MORE PACKAGING</span>
            <h2 className="related-title">Other Box Styles &amp; Formats</h2>
          </div>

          <div className="related-grid">
            {otherTypes.map((item) => (
              <div 
                key={item.id} 
                className="related-card" 
                onClick={() => {
                  onSelectType(item.id);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
              >
                <div className="related-img-wrapper">
                  <img src={item.cardImage} alt={item.title} className="related-card-img related-card-img-default" />
                  {item.cardHoverImage && (
                    <img src={item.cardHoverImage} alt={`${item.title} alternate view`} className="related-card-img related-card-img-hover" />
                  )}
                </div>
                <div className="related-card-body">
                  <h4 className="related-card-title">{item.title}</h4>
                  <span className="related-card-link">Explore →</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
