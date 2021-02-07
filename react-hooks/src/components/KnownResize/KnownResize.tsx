import React, { useCallback, useEffect, useMemo, useState } from 'react';

export const KnownResize = function KnownResize() {
  let [count, setCount] = useState(1);
  // let [width, setWidth] = useState(0);

  let onResize = useCallback(() => {
    console.log('Size changed, current count = ', count);

    // setWidth(document.body.getBoundingClientRect().width);
  }, [count]);

  useEffect(() => {
    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('resize', onResize);
    }
  }, [onResize]);

  let factorial = useMemo(() => {
    // console.log('[factorial calculation]');

    let result = 1;

    for (let i = 1; i <= count; i++) {
      result *= i;
    }

    return result;
  }, [count]);

  // console.log('[render]:', width);

  return (
    <div>
      <h4>
        KnownResize: {count}
      </h4>

      <button onClick={() => setCount(count + 1)}>
        Add +
      </button>

      <h4>{count}! = {factorial}</h4>
    </div>
  );
};
