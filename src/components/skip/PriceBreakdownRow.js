import React from 'react';

const PriceBreakdownRow = ({ label, value, highlight }) => (
  <div 
    className="price-breakdown-row" 
    aria-label={`${label}: ${value}`}
  >
    <span>{label}</span>
    <span className={highlight ? 'highlight' : ''}>{value}</span>
  </div>
);

export default PriceBreakdownRow; 