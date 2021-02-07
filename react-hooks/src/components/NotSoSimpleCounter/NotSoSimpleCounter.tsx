import React, { useState } from 'react';
import { SelectedLanguageLabel } from '../SelectedLanguageLabel/SelectedLanguageLabel';

interface NotSoSimpleCounterProps {
  lang: 'en' | 'ru';
}

export const NotSoSimpleCounter = function NotSoSimpleCounter({ lang }: NotSoSimpleCounterProps) {
  let [count, setCount] = useState(0);

  return (
    <div>
      <h4>
        NotSoSimpleCounter: {count}
      </h4>

      <button
        onClick={() => setCount(count + 1)}
      >
        Add +
      </button>

      <SelectedLanguageLabel lang={lang} />
      
    </div>
  );
};
