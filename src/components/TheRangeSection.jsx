import React from 'react';
import './TheRangeSection.css';

const rangeItems = [
  {
    id: 'tuck-cartons',
    category: 'PRIMARY LINE',
    title: 'Tuck Boxes & Cartons',
    description: 'Reverse and straight tuck-end cartons for skincare, supplements, and retail-ready lines.',
    specLabel: 'Board',
    specValue: '300–400gsm SBS'
  },
  {
    id: 'mylar-pouches',
    category: 'SECOND LINE',
    title: 'Mylar Pouches',
    description: "Barrier-laminate stand-up pouches specified to the product's moisture and light sensitivity.",
    specLabel: 'Material',
    specValue: 'BOPP / PET Laminate'
  },
  {
    id: 'botanical-line',
    category: 'BOTANICAL LINE',
    title: 'Pre-Roll & Botanical',
    description: 'Vials, tubes and cartons with child-resistant certification where applicable, for lawful markets only.',
    specLabel: 'Compliance',
    specValue: 'CR Certified on Request'
  },
  {
    id: 'cosmetic-cartons',
    category: 'RESERVE LIST',
    title: 'Serum & Cosmetic Cartons',
    description: 'Structured cartons with window cuts, foam inserts and tamper seals.',
    specLabel: 'Board',
    specValue: '350gsm+, Insert-Ready'
  },
  {
    id: 'rigid-luxury',
    category: 'RESERVE LIST',
    title: 'Rigid & Luxury Boxes',
    description: 'Wrapped rigid board with magnetic closure for gifting-grade launches.',
    specLabel: 'Closure',
    specValue: 'Magnetic / Shoulder-Neck'
  },
  {
    id: 'ammunition',
    category: 'BY ENQUIRY — COMPLIANCE REVIEWED',
    title: 'Ammunition & Shooting Sports',
    description: 'Centerfire and rimfire cartridge boxes for licensed manufacturers and distributors. Quoted only after export classification and buyer licensing (FFL/SOT where applicable) are confirmed — not a self-serve category.',
    specLabel: 'Board',
    specValue: 'Heavyweight SBS / Rigid'
  },
  {
    id: 'bespoke',
    category: 'BY ENQUIRY',
    title: 'Something Bespoke',
    description: 'Bring us the brief — custom specification is where we do our best work.',
    specLabel: 'Lead Time',
    specValue: 'On Consultation',
    fullWidth: true
  }
];

export default function TheRangeSection() {
  return (
    <section className="the-range-section" id="range">
      <div className="the-range-container">
        
        {/* Section Header (Left-aligned matching The Process) */}
        <div className="the-range-header reveal-up">
          <div className="the-range-eyebrow-wrapper">
            <span className="the-range-eyebrow-line" aria-hidden="true"></span>
            <span className="the-range-eyebrow">THE RANGE</span>
          </div>
          <h2 className="the-range-title">Five disciplines. One standard.</h2>
          <p className="the-range-subtitle">
            We begin every relationship with a single, well-executed run — then expand as trust is established.
          </p>
        </div>

        {/* The Range Editorial Table Grid (Not Clickable, Clean Borders) */}
        <div className="the-range-table-grid reveal-up">
          {rangeItems.map((item) => (
            <div 
              key={item.id} 
              className={`the-range-cell ${item.fullWidth ? 'the-range-cell-full' : ''}`}
            >
              <div className="range-cell-content">
                <span className="range-cell-category">{item.category}</span>
                <h3 className="range-cell-title">{item.title}</h3>
                <p className="range-cell-desc">{item.description}</p>
              </div>

              <div className="range-cell-spec">
                <span className="range-spec-label">{item.specLabel}</span>
                <span className="range-spec-value">{item.specValue}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
