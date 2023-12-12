import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import MainProvider from './Context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MainProvider>
      <App />
    </MainProvider>
  </React.StrictMode>
);
