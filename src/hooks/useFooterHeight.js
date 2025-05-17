import { useState, useRef, useLayoutEffect } from 'react';

export const useFooterHeight = (isVisible) => {
  const [footerHeight, setFooterHeight] = useState(0);
  const footerRef = useRef(null);

  useLayoutEffect(() => {
    if (footerRef.current) {
      setFooterHeight(footerRef.current.offsetHeight);
    } else {
      setFooterHeight(0);
    }
  }, [isVisible]);

  return { footerHeight, footerRef };
}; 