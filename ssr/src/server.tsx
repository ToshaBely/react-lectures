import express from 'express';

import React from 'react';
import {renderToString} from 'react-dom/server';
import { StaticRouter } from 'react-router';

import { renderApp } from './app';
import { renderTemplate } from './renderTemplate';

const app = express();

app.use(express.static('dist'));

app.get('*', (req, res) => {
  // const content = '';
  // const content = renderToString(renderApp());

  let context = {};

  const content = renderToString(
    <StaticRouter location={req.url} context={context}>
      { renderApp() }
    </StaticRouter>
  );

  res.send(
    renderTemplate({
      cssPath: 'main.css',
      jsPath: 'main.js',
      content,
      //data: JSON.stringify(data) // event.data
    })
  );
});

app.listen(3000, () => {
  console.log(`Server is listening on port: 3000`);
});
