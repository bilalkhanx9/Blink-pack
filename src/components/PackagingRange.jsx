import React from 'react';
import './PackagingRange.css';

const packagingItems = [
  {
    id: 'corrugated',
    title: 'Corrugate / Mailer',
    subtitle: 'Shipping & subscription boxes',
    image: '/MailerBox/1.webp',
    hoverImage: '/MailerBox/2.webp'
  },
  {
    id: 'tuck',
    title: 'Tuck Box',
    subtitle: '3 folding styles',
    image: '/main_page_boxes/tuckbox-1.webp',
    hoverImage: '/main_page_boxes/tuckbox-2.webp'
  },
  {
    id: 'fliptop',
    title: 'Flip Top Box',
    subtitle: 'Rigid, two-piece',
    image: '/main_page_boxes/fliptop-1.webp',
    hoverImage: '/main_page_boxes/fliptop-2.webp'
  },
  {
    id: 'gable',
    title: 'Gable Box',
    subtitle: 'Handle-top carrier',
    image: '/main_page_boxes/gablebox-1.webp',
    hoverImage: '/main_page_boxes/gablebox-2.webp'
  },
  {
    id: 'display',
    title: 'Display Box',
    subtitle: 'Retail counter display',
    image: '/main_page_boxes/display-1.webp',
    hoverImage: '/main_page_boxes/display-2.webp'
  },
  {
    id: 'pouches',
    title: 'Bags',
    subtitle: 'Flat & stand-up pouch',
    image: '/main_page_boxes/bag-1.webp',
    hoverImage: '/main_page_boxes/bag-2.webp'
  }
];

export default function PackagingRange({ onSelectType }) {
  return (
    <section className="range-section" id="range">
      <div className="range-container">
        
        {/* Section Header */}
        <div className="range-header reveal-up">
          <span className="range-eyebrow">OUR PACKAGING RANGE</span>
          <h2 className="range-title">Made for your product. Made to stand out.</h2>
        </div>

        {/* 6-Card Grid */}
        <div className="range-grid reveal-stagger">
          {packagingItems.map((item) => (
            <div 
              key={item.id} 
              className="range-card"
              onClick={() => onSelectType && onSelectType(item.id)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  onSelectType && onSelectType(item.id);
                }
              }}
            >
              {/* Product Visual Area with Dual-Image Smooth Hover Swap */}
              <div className="card-image-wrapper">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="card-image card-image-default"
                  loading="lazy"
                />
                {item.hoverImage && (
                  <img 
                    src={item.hoverImage} 
                    alt={`${item.title} alternate view`} 
                    className="card-image card-image-hover"
                    loading="lazy"
                  />
                )}
              </div>

              {/* Card Label Area with Smooth Hover Title-to-Explore Transition */}
              <div className="card-info">
                {/* Default State: Title + Subtitle */}
                <div className="card-label-default">
                  <h3 className="card-title">{item.title}</h3>
                  <p className="card-subtitle">{item.subtitle}</p>
                </div>

                {/* Hover State: Explore with Arrow */}
                <div className="card-label-hover" aria-hidden="true">
                  <span className="explore-label">Explore</span>
                  <span className="explore-arrow">→</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
