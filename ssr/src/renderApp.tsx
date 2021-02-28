import React from 'react';

import { StaticHelloComponent } from './components/StaticHelloComponent/StaticHelloComponent';
import { SecondsCounter } from './components/SecondsCounter/SecondsCounter';
import { RouterExample } from './components/RouterExample/RouterExample';
import { RouterWithDataExample } from './components/RouterWithDataExample/RouterWithDataExample';

import './app.css';

export function renderApp() {
  return (
    <StaticHelloComponent />
    // <SecondsCounter />
    // <RouterExample />
    // <RouterWithDataExample />
  );
}
