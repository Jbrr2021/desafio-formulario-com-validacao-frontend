// main.jsx
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import './global.css';

// Renderiza o componente principal "App" no elemento com ID "root"
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
