import React from 'react';

import { StaticHelloComponent } from './components/StaticHelloComponent';
import { SecondsCounter } from './components/SecondsCounter';
import { RouterExample } from './components/RouterExample';

import './app.css';

export function renderApp() {
  return (
    // <StaticHelloComponent />
    // <SecondsCounter />
    <RouterExample />
  );
}
