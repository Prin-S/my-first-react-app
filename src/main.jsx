import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { Container } from './Hello.jsx';
import { AnimalsList } from './Animals.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Container />
    <AnimalsList />
    <App />
  </StrictMode>,
)
