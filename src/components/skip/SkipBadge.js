import React from 'react';
const SkipBadge = ({ size, ariaLabel, background, color }) => (
  <span
    className="skip-badge-pill"
    style={{ background: background || 'var(--badge-bg)', color: color || 'var(--text-main)', borderRadius: '999px', padding: '0.25em 1em', fontWeight: 600, fontSize: 16 }}
    aria-label={ariaLabel}
    tabIndex={-1}
  >
    {size} Yards
  </span>
);
export default SkipBadge; 