import React, { useEffect, useState } from 'react';

export const CounterWithTimer = function CounterWithTimer() {
  let [count, setCount] = useState(0);

  useEffect(() => {
    let i = 1;

    let timer = setInterval(() => {
      console.log(`[Effect interval ${i}]: ${count}`);
      i++;
    }, 2000);

    // return function cleanup() {
    //   clearInterval(timer);
    // };
  }, [count]);

  useEffect(() => {
    function onResize() {
      console.log('Size changed, current count = ', count);
    }

    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('resize', onResize);
    }
  }, [count]);

  console.log('render with count =', count);

  return (
    <div>
      <h4>
        CounterWithTimer: {count}
      </h4>

      <button onClick={() => setCount(count + 1)}>
        Add +
      </button>
    </div>
  );
};
