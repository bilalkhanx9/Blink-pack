import React, { useState, useEffect } from 'react';
import TopBanner from './components/TopBanner';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PackagingRange from './components/PackagingRange';
import FreeDesignBanner from './components/FreeDesignBanner';
import ProcessSection from './components/ProcessSection';
import StandardSection from './components/StandardSection';
import PackagingDetailPage from './components/PackagingDetailPage';
import { packagingTypes, getPackagingTypeById } from './data/packagingData';
import { useScrollReveal } from './hooks/useScrollReveal';
import './index.css';

export default function App() {
  // Navigation state: null for home, or box id (e.g. 'tuck', 'corrugated', etc.)
  const [selectedTypeId, setSelectedTypeId] = useState(null);

  // Initialize smooth scroll reveal animations
  useScrollReveal([selectedTypeId]);

  // Sync with URL hash if present
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash.startsWith('#/packaging/')) {
        const id = hash.replace('#/packaging/', '');
        setSelectedTypeId(id);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (!hash || hash === '#' || hash === '#home') {
        setSelectedTypeId(null);
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleSelectType = (id) => {
    setSelectedTypeId(id);
    window.location.hash = `#/packaging/${id}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigateHome = () => {
    setSelectedTypeId(null);
    window.location.hash = '';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentPackagingType = selectedTypeId ? getPackagingTypeById(selectedTypeId) : null;

  return (
    <div className="app-layout">
      <TopBanner />
      <Navbar onNavigateHome={handleNavigateHome} />

      {selectedTypeId && currentPackagingType ? (
        /* Single Packaging Type Detail View */
        <>
          <PackagingDetailPage 
            packagingType={currentPackagingType} 
            onNavigateHome={handleNavigateHome}
            onSelectType={handleSelectType}
          />
          <FreeDesignBanner />
        </>
      ) : (
        /* Home Page View */
        <>
          <Hero />
          <FreeDesignBanner />
          <PackagingRange onSelectType={handleSelectType} />
          <ProcessSection />
          <StandardSection />
        </>
      )}
    </div>
  );
}
