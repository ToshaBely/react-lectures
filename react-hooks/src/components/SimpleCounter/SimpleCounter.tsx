import React, { useState } from 'react';

export const SimpleCounter = function SimpleCounter() {
  let [count, setCount] = useState(0);

  return (
    <div>
      <h4>
        SimpleCounter: {count}
      </h4>

      <button
        onClick={() => setCount(count + 1)}
      >
        Add +
      </button>
    </div>
  );
};
