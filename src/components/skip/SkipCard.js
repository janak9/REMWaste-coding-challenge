import React from 'react';
import SkipBadge from './SkipBadge';
import RestrictionBadge from './RestrictionBadge';
import HeavyWasteTag from './HeavyWasteTag';
import { getSkipImage, calculateSkipTotal, formatPrice } from '../../utils/skipUtils';

const SkipCard = ({ skip, selected, onSelect, animationDelay = 0 }) => {
  const {
    size,
    price_before_vat,
    vat,
    allowed_on_road,
    hire_period_days,
    allows_heavy_waste
  } = skip;

  const name = `${size} Yard Skip`;
  const total = calculateSkipTotal(price_before_vat, vat);
  const formattedPrice = formatPrice(price_before_vat);
  const formattedVAT = vat ? `+${vat}% VAT` : '';
  const formattedTotal = formatPrice(total);
  const imageUrl = getSkipImage(size);

  return (
    <div
      className={`card-base skip-card-dark modern-skip-card${selected ? ' selected' : ''}`}
      onClick={onSelect}
      tabIndex={0}
      role="button"
      aria-pressed={selected}
      aria-label={selected ? `${name} selected` : `Select ${name}`}
      style={{ animationDelay: `${animationDelay}ms` }}
      onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') { onSelect(); } }}
    >
      <div className="skip-card-image-wrapper" style={{ position: 'relative' }}>
        <div className="skip-card-badges">
          <SkipBadge size={size} ariaLabel={`${size} Yards`} background="var(--primary)" color="#fff" />
          {!allowed_on_road && (
            <RestrictionBadge text="Not Allowed on Road" />
          )}
        </div>
        <img src={imageUrl} alt={name} className="skip-card-image" />
      </div>
      <div className="skip-card-content">
        <h3 className="skip-card-title">{name}</h3>
        <span className="skip-card-period">{hire_period_days || 14} day hire</span>
        <HeavyWasteTag allowed={!!allows_heavy_waste} />
        <div className="skip-card-pricing">
          <span className="skip-card-price">{formattedPrice}</span>
          <span className="skip-card-vat">{formattedVAT}</span>
        </div>
        <div className="skip-card-total">Total: <span>{formattedTotal}</span></div>
        <button
          className={`btn btn-primary skip-card-select-btn${selected ? ' selected-action-button' : ''}`}
          onClick={e => { e.stopPropagation(); onSelect(); }}
          aria-label={selected ? 'Selected' : 'Select This Skip'}
        >
          {selected ? (
            <span>Selected <span aria-hidden="true">✓</span></span>
          ) : (
            <span>Select This Skip</span>
          )}
        </button>
      </div>
    </div>
  );
};

export default SkipCard; 