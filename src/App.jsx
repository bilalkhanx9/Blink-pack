import React, { useState, useEffect } from 'react';
import TopBanner from './components/TopBanner';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PackagingRange from './components/PackagingRange';
import FreeDesignBanner from './components/FreeDesignBanner';
import ProcessSection from './components/ProcessSection';
import StandardSection from './components/StandardSection';
import CallToActionBanner from './components/CallToActionBanner';
import Footer from './components/Footer';
import PackagingDetailPage from './components/PackagingDetailPage';
import ContactPage from './components/ContactPage';
import TheRangeSection from './components/TheRangeSection';
import { packagingTypes, getPackagingTypeById } from './data/packagingData';
import { useScrollReveal } from './hooks/useScrollReveal';
import './index.css';

export default function App() {
  // Navigation state: null for home, 'contact' for contact page, or box id (e.g. 'tuck', 'corrugated')
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
      } else if (hash === '#/contact' || hash === '#contact') {
        setSelectedTypeId('contact');
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
    if (id === 'contact') {
      window.location.hash = '#/contact';
    } else {
      window.location.hash = `#/packaging/${id}`;
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigateHome = () => {
    setSelectedTypeId(null);
    window.location.hash = '';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigateContact = () => {
    handleSelectType('contact');
  };

  const isContactPage = selectedTypeId === 'contact';
  const currentPackagingType = (!isContactPage && selectedTypeId) ? getPackagingTypeById(selectedTypeId) : null;

  return (
    <div className="app-layout">
      <TopBanner />
      <Navbar 
        onNavigateHome={handleNavigateHome} 
        onNavigateContact={handleNavigateContact}
      />

      {isContactPage ? (
        /* Dedicated Contact Us Page */
        <ContactPage 
          onNavigateHome={handleNavigateHome}
          onSelectType={handleSelectType}
        />
      ) : selectedTypeId && currentPackagingType ? (
        /* Single Packaging Type Detail View */
        <>
          <PackagingDetailPage 
            packagingType={currentPackagingType} 
            onNavigateHome={handleNavigateHome}
            onSelectType={handleSelectType}
            onNavigateContact={handleNavigateContact}
          />
          <FreeDesignBanner onNavigateContact={handleNavigateContact} />
        </>
      ) : (
        /* Home Page View */
        <>
          <Hero />
          <PackagingRange onSelectType={handleSelectType} />
          <TheRangeSection 
            onNavigateContact={handleNavigateContact} 
            onSelectType={handleSelectType}
          />
          <FreeDesignBanner onNavigateContact={handleNavigateContact} />
          <ProcessSection />
          <StandardSection />
          <CallToActionBanner onNavigateContact={handleNavigateContact} />
        </>
      )}

      <Footer 
        onNavigateHome={handleNavigateHome} 
        onSelectType={handleSelectType} 
        onNavigateContact={handleNavigateContact}
      />
    </div>
  );
}


