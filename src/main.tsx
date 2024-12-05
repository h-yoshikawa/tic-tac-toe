import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import Square from './Square';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Square />
  </StrictMode>
);
