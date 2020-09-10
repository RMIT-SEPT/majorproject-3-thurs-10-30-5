import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider as BumbagProvider } from 'bumbag';

import App from './App';
import * as serviceWorker from './serviceWorker';

const theme = {
  palette: {
    text: '#212121',
    primary: '#574feb',
    info: '#1e67d5',
    success: '#0a7d33',
    danger: '#da1717',
    warning: '#ed9c22'
  }
}

ReactDOM.render(
  // <React.StrictMode>
  <BrowserRouter>
    <BumbagProvider theme={theme}>
      <App />
    </BumbagProvider>
  </BrowserRouter>,

  // </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
