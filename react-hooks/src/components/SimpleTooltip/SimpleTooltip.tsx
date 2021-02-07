import React, { useCallback, useRef, useState } from 'react';

import { useClickOutside } from '../../hooks/useClickOutside/useClickOutside';

export const SimpleTooltip = function SimpleTooltip() {
  let inputRef = useRef<HTMLInputElement | null>(null);
  let tooltipRef = useRef<HTMLDivElement | null>(null);

  let [isTooltipOpen, setIsTooltipOpen] = useState<boolean>(false);

  let toggleTooltip = useCallback(() => {
    setIsTooltipOpen(!isTooltipOpen);
  }, [isTooltipOpen]);

  let closeTooltip = useCallback((event: MouseEvent) => {
    if (isTooltipOpen) {
      setIsTooltipOpen(false);
    }
  }, [isTooltipOpen]);

  useClickOutside(tooltipRef, closeTooltip);

  return (
    <div>
      <h4>
        SimpleTooltip
      </h4>

      <input ref={inputRef} />

      <button onClick={toggleTooltip}>
        Toggle tooltip
      </button>


      {isTooltipOpen && (
        <div ref={tooltipRef}>
          Just enter something into Input field
        </div>
      )}
    </div>
  );
};
