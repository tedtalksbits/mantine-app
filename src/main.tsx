import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import ThemeProvider from './ThemeProvider.tsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
