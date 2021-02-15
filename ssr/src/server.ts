import express from 'express';
import {renderToString} from 'react-dom/server';

import { renderApp } from './app';
import { renderTemplate } from './renderTemplate';

const app = express();

app.use(express.static('dist'));

app.get('*', (req, res) => {
  const content = renderToString(renderApp());

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
