import React from 'react';
import SkipFooterSummary from '../skip/SkipFooterSummary';

const Footer = React.forwardRef(({ selectedSkip }, ref) => {
  if (!selectedSkip) return null;

  const {
    size,
    hire_period_days,
    price_before_vat,
    vat,
    transport_cost,
    per_tonne_cost
  } = selectedSkip;

  const total = price_before_vat && vat ? price_before_vat * (1 + vat / 100) : price_before_vat;

  return (
    <div ref={ref} className="footer-fixed skip-footer-glass" role="region" aria-label="Skip selection summary and actions">
      <div className="footer-content">
        <SkipFooterSummary
          size={size}
          hirePeriod={hire_period_days}
          priceBeforeVAT={price_before_vat}
          vat={vat}
          transportCost={transport_cost}
          perTonneCost={per_tonne_cost}
          total={total}
        />
        <div className="footer-desktop-btns">
          <button className="btn btn-secondary" aria-label="Back to previous step">Back</button>
          <button className="btn btn-primary" aria-label="Continue to next step">
            Continue
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right w-4 h-4"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
          </button>
        </div>
      </div>
    </div>
  );
});

export default Footer; 