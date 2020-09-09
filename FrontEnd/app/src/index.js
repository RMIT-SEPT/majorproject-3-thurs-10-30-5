import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider as BumbagProvider } from 'bumbag';

import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  // <React.StrictMode>
  <BrowserRouter>
    <BumbagProvider>
      <App />
    </BumbagProvider>
  </BrowserRouter>,

  // </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
