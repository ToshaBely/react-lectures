import * as React from 'react';
import { hydrate } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { createStore, Store } from 'redux';


import { renderApp } from './renderApp';
import { restoreDataOnClient } from './data/restoreDataOnClient';
import { reducer } from './reducer';

function run(store?: Store) {
  hydrate(
    renderApp(),

    // (
    //   <BrowserRouter>
    //     { renderApp() }
    //   </BrowserRouter>
    // ),

    // (
    //   <Provider store={store}>
    //     <BrowserRouter>
    //       { renderApp() }
    //     </BrowserRouter>
    //   </Provider> 
    // ),

    document.getElementById('root'),
  );
}

let store = createStore(reducer, restoreDataOnClient());

run(store);
