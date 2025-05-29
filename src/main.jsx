import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext.jsx'; 
import { WatchListProvider } from './context/WatchListContext.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <WatchListProvider>
          <App />
        </WatchListProvider>
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>
);
