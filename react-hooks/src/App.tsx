import React from 'react';

import { LangContext } from './common/LangContext';

import { ContextCounter } from './components/ContextCounter/ContextCounter';
import { CounterWithLogger } from './components/CounterWithLogger/CounterWithLogger';
import { CounterWithTimer } from './components/CounterWithTimer/CounterWithTimer';
import { DifficultState } from './components/DifficultState/DifficultState';
import { KnownResize } from './components/KnownResize/KnownResize';
import { KnownWidthOnDemand } from './components/KnownWidthOnDemand/KnownWidthOnDemand';
import { NotSoSimpleCounter } from './components/NotSoSimpleCounter/NotSoSimpleCounter';
import { SimpleCounter } from './components/SimpleCounter/SimpleCounter';
import { SimpleTooltip } from './components/SimpleTooltip/SimpleTooltip';

import './App.css';

function App() {
  return (
    <div className="App">
      {/* useState */}
      <SimpleCounter />

      {/* useEffect */}
      {/* <CounterWithLogger /> */}
      {/* <CounterWithTimer /> */}

      {/* useCallback */}
      {/* <KnownResize /> */}

      {/* useContext */}
      {/* <NotSoSimpleCounter lang="en" /> */}
      {/* <LangContext.Provider value='ru'> */}
        {/* <ContextCounter /> */}
      {/* </LangContext.Provider> */}

      {/* useRef */}
      {/* <KnownWidthOnDemand /> */}

      {/* useReducer */}
      {/* <DifficultState /> */}

      {/* Own hook */}
      {/* <SimpleTooltip /> */}
    </div>
  );
}

export default App;
