import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ContextMenuProvider } from 'react-contextmenu-anywhere';

ReactDOM.render(
  <React.StrictMode>
    <ContextMenuProvider>
      <App />
    </ContextMenuProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
