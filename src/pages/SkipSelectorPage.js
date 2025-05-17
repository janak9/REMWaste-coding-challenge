import React, { useState, useEffect } from 'react';
import SkipCard from '../components/skip/SkipCard';
import Footer from '../components/layout/Footer';
import Loader from '../components/common/Loader';
import { fetchSkips } from '../services/api';
import { useFooterHeight } from '../hooks/useFooterHeight';

const SkipSelectorPage = () => {
  const [skips, setSkips] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedSkipId, setSelectedSkipId] = useState(null);
  const { footerHeight, footerRef } = useFooterHeight(!!selectedSkipId);

  useEffect(() => {
    const loadSkips = async () => {
      try {
        setLoading(true);
        const data = await fetchSkips();
        setSkips(data || []);
      } catch (e) {
        setError(e.message);
        console.error("Failed to fetch skips:", e);
      } finally {
        setLoading(false);
      }
    };

    loadSkips();
  }, []);

  const handleSelectSkip = (skipId) => {
    setSelectedSkipId(skipId);
  };

  const selectedSkip = skips.find((skip) => skip.id === selectedSkipId) || null;

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <p>Error loading skips: {error}. Please try refreshing the page.</p>;
  }

  if (!skips || skips.length === 0) {
    return <p>No skips available for the selected criteria. Try another postcode or area.</p>;
  }

  return (
    <main className="skip-selector-root" style={{ paddingBottom: selectedSkip ? footerHeight : 0 }} aria-label="Skip Selector Main Content">
      <h2 className="skip-title">Choose Your Skip Size</h2>
      <p className="skip-subtitle">Select the skip size that best suits your needs</p>
      <section aria-label="Available Skip Sizes">
        <ul className="skip-list skip-list-centered" style={{ listStyle: 'none' }}>
          {skips.map((skip, i) => (
            <li key={skip.id} style={{ display: 'flex' }}>
              <article aria-label={`${skip.size} Yard Skip`}>
                <SkipCard
                  skip={skip}
                  selected={selectedSkipId === skip.id}
                  onSelect={() => handleSelectSkip(skip.id)}
                  animationDelay={i * 80}
                />
              </article>
            </li>
          ))}
        </ul>
      </section>
      {selectedSkip && <Footer ref={footerRef} selectedSkip={selectedSkip} />}
    </main>
  );
};

export default SkipSelectorPage; 