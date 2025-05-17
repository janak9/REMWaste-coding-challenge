import React from 'react';
import PriceBreakdownRow from './PriceBreakdownRow';
import { formatPrice } from '../../utils/skipUtils';

const SkipFooterSummary = ({
  size,
  hirePeriod,
  priceBeforeVAT,
  vat,
  transportCost,
  perTonneCost,
  total
}) => {
  return (
    <div className="skip-footer-summary">
      <h3 className="skip-footer-summary-title">{size} Yard Skip</h3>
      <p className="skip-footer-summary-period">{hirePeriod || 14} day hire</p>
      <div className="price-breakdown">
        <PriceBreakdownRow label="Skip Hire" value={formatPrice(priceBeforeVAT)} />
        {vat && <PriceBreakdownRow label="VAT" value={`${vat}%`} />}
        {transportCost && <PriceBreakdownRow label="Transport" value={formatPrice(transportCost)} />}
        {perTonneCost && <PriceBreakdownRow label="Per Tonne Cost" value={formatPrice(perTonneCost)} />}
        <PriceBreakdownRow label="Total" value={formatPrice(total)} highlight />
      </div>
    </div>
  );
};

export default SkipFooterSummary; 