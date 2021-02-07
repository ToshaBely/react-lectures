import React, { useCallback, useEffect, useRef } from 'react';

export const KnownWidthOnDemand = function KnownWidthOnDemand() {
  let widthRef = useRef(0);

  let onResize = useCallback(() => {
    console.log('[On resize]');
    widthRef.current = document.body.getBoundingClientRect().width;
  }, []);

  useEffect(() => {
    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('resize', onResize);
    }
  }, [onResize]);

  let logWidth = useCallback(() => {
    console.log('current width is', widthRef.current);
  }, []);

  console.log('[render]');

  return (
    <div>
      <h4>
        KnownWidthOnDemand
      </h4>

      <button onClick={logWidth}>
        Log width
      </button>
    </div>
  );
};
