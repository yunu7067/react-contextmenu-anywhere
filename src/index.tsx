import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ContextMenuProvider from './lib/Provider';

ReactDOM.render(
  <React.StrictMode>
    <ContextMenuProvider darkmode>
      <App />
    </ContextMenuProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
