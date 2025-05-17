import React from 'react';
const HeavyWasteTag = ({ allowed }) => (
  <span
    className={`heavy-waste-tag${!allowed ? ' no-heavy-waste' : ''}`}
    style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 14, fontWeight: 500, margin: '8px 0' }}
    aria-label={allowed ? 'Heavy Waste Allowed' : 'No Heavy Waste'}
  >
    {allowed ? (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--success)' }}><path d="M20 6 9 17l-5-5" /></svg>
    ) : (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--highlight)' }}><circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" /></svg>
    )}
    {allowed ? 'Heavy Waste Allowed' : 'No Heavy Waste'}
  </span>
);
export default HeavyWasteTag; 