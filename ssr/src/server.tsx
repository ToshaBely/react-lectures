import express from 'express';

import React from 'react';
import {renderToString} from 'react-dom/server';
import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router';
import { createStore } from 'redux';

import { renderApp } from './renderApp';
import { fetchDataByUrl } from './data/fetchDataByUrl';
import { renderTemplate } from './renderTemplate';

const app = express();

app.use(express.static('dist'));

// app.get('/api/router-data', async (req, res) => {
//   try {
//     console.log('try');

//     res.json((await fetchDataByUrl(req.query.url.toString())));
//   } catch (err) {
//     res.status(500).json({
//       message: err.message,
//       stack: err.stack
//     });
//   }
// });

app.get('*', async (req, res) => {
  /* Example with Empty content */
  // const content = '';

  /* Example with SSR */
  const content = renderToString(renderApp());


  /* Example with Routing */
  // let context = {};

  // const content = renderToString(
  //   <StaticRouter location={req.url} context={context}>
  //     { renderApp() }
  //   </StaticRouter>
  // );


  /* Example with Data */
  // let context = {};
  // let data = await fetchDataByUrl(req.url);

  // let store = createStore(
  //   (state) => state,
  //   data,
  // );

  // const content = renderToString(
  //   <Provider store={store}>
  //     <StaticRouter location={req.url} context={context}>
  //       { renderApp() }
  //     </StaticRouter>
  //   </Provider>
  // );

  res.send(
    renderTemplate({
      cssPath: 'main.css',
      jsPath: 'main.js',
      content,
      // data: JSON.stringify(data),
    })
  );
});

app.listen(3000, () => {
  console.log(`Server is listening on port: 3000`);
});
