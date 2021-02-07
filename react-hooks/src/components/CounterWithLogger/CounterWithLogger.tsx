import React, { useEffect, useState } from 'react';

export const CounterWithLogger = function CounterWithLogger() {
  let [count, setCount] = useState(0);

  let [animal, setAnimal] = useState('dog');

  useEffect(() => {
    console.log('effect with count =', count);

    document.title = `${count} clicks`;
  });

  // deps
  // empty deps

  console.log('render with count =', count);

  return (
    <div>
      <h4>
        CounterWithLogger: {count}
      </h4>

      <button onClick={() => setCount(count + 1)}>
        Add +
      </button>

      <div style={{marginTop: 24}}>
        <span>My favorite animal:</span>

        &nbsp;

        <select
          onChange={(event) => {
            setAnimal(event.target.value);
          }}
          value={animal}
        >
          <option value="cat">Cat</option>
          <option value="dog">Dog</option>
          <option value="parrot">Parrot</option>
        </select>
      </div>
    </div>
  );
};
