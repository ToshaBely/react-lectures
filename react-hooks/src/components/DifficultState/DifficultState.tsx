import React, { useCallback, useReducer, useRef } from 'react';

interface ActionType {
  type: string;
  payload?: any;
}

function wordCountReducer(state: number = 0, action: ActionType) {
  switch(action.type) {
    case 'add': {
      return state + action.payload;
    }

    case 'reset': {
      return 0;
    }

    default: {
      return state;
    }
  }
}

export const DifficultState = function DifficultState() {
  let inputRef = useRef<HTMLInputElement | null>(null);

  let [wordCount, dispatch] = useReducer(wordCountReducer, 0);

  let processInput = useCallback(() => {
    if (inputRef.current) {
      let inputValue = inputRef.current.value;

      if (inputValue) {
        let wordCount = inputValue.split(/ +/).length;

        console.log(`You input "${inputValue}", word count = ${wordCount}`);

        dispatch({ type: 'add', payload: wordCount });
      }

      inputRef.current.value = '';
    }
  }, []);

  let resetCounter = useCallback(() => {
    dispatch({ type: 'reset' });
  }, []);

  console.log('[render]');

  return (
    <div>
      <h4>
        DifficultState: word count = {wordCount}
      </h4>

      <input ref={inputRef} />

      <button onClick={processInput}>
        Add words from input
      </button>

      <button onClick={resetCounter}>
        Reset counter
      </button>
    </div>
  );
};
