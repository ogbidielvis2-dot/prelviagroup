import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import PortalApp from './PortalApp.jsx';
import '../styles/global.css';
import './portal.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PortalApp />
  </StrictMode>,
);
