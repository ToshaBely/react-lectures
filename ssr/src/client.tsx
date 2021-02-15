import * as React from 'react';
import { hydrate } from 'react-dom';

import { renderApp } from './app';

function run() {
  hydrate(
    renderApp(),
    document.getElementById('root'),
  );
}

run();
