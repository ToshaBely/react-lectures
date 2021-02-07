import React, { useContext, useState } from 'react';

import { LangContext } from '../../common/LangContext';

import { SelectedLanguageLabel } from '../SelectedLanguageLabel/SelectedLanguageLabel';


export const ContextCounter = function ContextCounter() {
  let [count, setCount] = useState(0);

  let lang = useContext(LangContext);

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
