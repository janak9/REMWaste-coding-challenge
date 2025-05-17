import React from 'react';
const RestrictionBadge = ({ text }) => (
  <span
    className="restriction-badge-pill"
    style={{ background: 'var(--danger)', color: 'var(--text-main)', borderRadius: '999px', padding: '0.25em 1em', fontWeight: 600, fontSize: 14, marginLeft: 8 }}
    aria-label={text}
    tabIndex={-1}
  >
    {text}
  </span>
);
export default RestrictionBadge; 